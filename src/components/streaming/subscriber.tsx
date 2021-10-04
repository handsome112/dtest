/* eslint-disable camelcase */
import * as React from 'react';
import classnames from 'classnames';
import withAntMedia from 'src/antmedia';
import { streamService } from 'src/services';
import { StreamSettings } from 'src/interfaces';
import { WEBRTC_ADAPTOR_INFORMATIONS } from 'src/antmedia/constants';
import {
  WebRTCAdaptorConfigs,
  WebRTCAdaptorProps
} from 'src/antmedia/interfaces';
import './index.less';
import videojs from 'video.js';
import Router from 'next/router';

interface IProps extends WebRTCAdaptorProps {
  settings: StreamSettings;
  configs: Partial<WebRTCAdaptorConfigs>;
}

const DEFAULT_IMAGE_URL = '/';

class Subscriber extends React.PureComponent<IProps> {
  private streamId: string;

  private onTrack: string;

  private player: videojs.Player;

  private getLiveStreamOrVodURLInterval: NodeJS.Timeout;

  componentDidMount() {
    Router.events.on('routeChangeStart', this.onbeforeunload);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onbeforeunload);
    if (this.getLiveStreamOrVodURLInterval) {
      clearInterval(this.getLiveStreamOrVodURLInterval);
      this.getLiveStreamOrVodURLInterval = null;
    }
  }

  onbeforeunload = () => {
    this.destroyPlaybackVideo();
  };

  ended = async () => {
    this.player && this.player.error(null);
    const { settings } = this.props;
    if (!this.streamId) {
      this.resetPlaybackVideo();
      return;
    }

    const src = await streamService.getLiveStreamOrVodURL({
      streamId: this.streamId,
      settings,
      appName: settings.AntMediaAppname
    });
    if (src) {
      this.getLiveStreamOrVodURLInterval = setInterval(() => {
        fetch(src, { method: 'HEAD' }).then(() => {
          this.playHLS(this.streamId);
        });
      }, 5000);
    }
  };

  async handelWebRTCAdaptorCallback(
    info: WEBRTC_ADAPTOR_INFORMATIONS,
    obj: any
  ) {
    const { webRTCAdaptor, settings } = this.props;
    if (info === WEBRTC_ADAPTOR_INFORMATIONS.INITIALIZED) {
      const token = await streamService.getSubscriberToken({
        streamId: this.streamId,
        settings
      });
      webRTCAdaptor.play(this.streamId, token);
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.NEW_STREAM_AVAILABLE) {
      if (this.onTrack === obj.streamId) {
        return;
      }

      if (this.player) {
        this.player.dispose();
        this.player = null;
      }

      this.onTrack = obj.streamId;
      this.createRemoteVideo(obj.stream);
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PLAY_FINISHED) {
      this.onTrack = null;
      setTimeout(() => {
        webRTCAdaptor.getStreamInfo(obj.streamId);
      }, 5000);
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.STREAM_INFORMATION) {
      if (obj.streamId === this.streamId) {
        const token = await streamService.getSubscriberToken({
          streamId: obj.streamId,
          settings
        });
        webRTCAdaptor.play(obj.streamId, token);
      }
    }
  }

  cbErrorHandler(error: string) {
    if (error === 'no_stream_exist') {
      const { webRTCAdaptor, initWebRTCAdaptor } = this.props;
      if (!webRTCAdaptor) {
        initWebRTCAdaptor(
          this.handelWebRTCAdaptorCallback.bind(this),
          this.cbErrorHandler.bind(this)
        );
      } else {
        this.streamId && webRTCAdaptor.getStreamInfo(this.streamId);
      }
    }
  }

  createPlaybackideo(poster = DEFAULT_IMAGE_URL) {
    const { classNames } = this.props;
    const video = document.createElement('video');
    video.setAttribute('id', 'subscriber');
    video.setAttribute('class', classnames('video-js broadcaster', classNames));
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    video.playsInline = true;
    document.querySelector('.video-container').append(video);
    const player = videojs(
      'subscriber',
      {
        autoplay: true,
        liveui: true,
        muted: true,
        controls: true,
        bigPlayButton: false,
        poster
      },
      () => {
        this.player = player;
      }
    );
    player.on('ended', this.ended);
    player.on('error', this.ended);
  }

  resetPlaybackVideo(poster = DEFAULT_IMAGE_URL) {
    this.destroyPlaybackVideo();
    if (this.getLiveStreamOrVodURLInterval) {
      clearInterval(this.getLiveStreamOrVodURLInterval);
      this.getLiveStreamOrVodURLInterval = null;
    }
    this.createPlaybackideo(poster);
  }

  destroyPlaybackVideo() {
    this.streamId = null;
    this.onTrack = null;
    if (this.player) {
      this.player.dispose();
      this.player = null;
    }
  }

  createRemoteVideo(stream: any) {
    const { classNames } = this.props;
    const video = document.createElement('video');
    video.setAttribute('id', 'subscriber');
    video.setAttribute('class', classnames('video-js broadcaster', classNames));
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.srcObject = stream;
    document.querySelector('.video-container').append(video);
    const player = videojs('subscriber', {
      liveui: true,
      autoplay: true,
      controls: true
    }, () => {
      this.player = player;
    });
    player.on('error', () => {
      player.error(null);
    });
    player.addClass('vjs-waiting');
  }

  async play(streamId: string) {
    const {
      initWebRTCAdaptor, initialized, webRTCAdaptor, settings
    } = this.props;
    this.streamId = streamId;
    if (initialized) {
      const token = await streamService.getSubscriberToken({
        streamId,
        settings
      });
      webRTCAdaptor.play(streamId, token);
      return;
    }

    initWebRTCAdaptor(
      this.handelWebRTCAdaptorCallback.bind(this),
      this.cbErrorHandler.bind(this)
    );
  }

  async playHLS(streamId: string, streamHeight = 0) {
    if (!streamId) {
      return;
    }

    if (!this.player) {
      this.createPlaybackideo();
    }

    if (this.getLiveStreamOrVodURLInterval) {
      clearInterval(this.getLiveStreamOrVodURLInterval);
      this.getLiveStreamOrVodURLInterval = null;
    }

    const { configs, settings } = this.props;
    const appName = configs.appName || settings.AntMediaAppname;
    this.streamId = streamId;
    const src = await streamService.getLiveStreamOrVodURL(
      {
        appName,
        settings,
        streamId
      },
      streamHeight
    );
    if (!src) {
      return;
    }

    setTimeout(() => {
      if (!this.player) return;

      this.player.addClass('vjs-waiting');
      this.player.src({
        type: 'application/x-mpegURL',
        src
      });
      this.player.play();
      this.player.controls(true);
    }, 1 * 1000);
  }

  stop() {
    this.resetPlaybackVideo();
  }

  poster(src: string) {
    if (this.player) {
      this.player.poster(src);
    }
  }

  render() {
    return <div className="video-container" />;
  }
}

export default withAntMedia(Subscriber);
