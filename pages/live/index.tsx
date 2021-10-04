/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import Head from 'next/head';
import {
  Row, Col, Button, message
} from 'antd';
import { connect } from 'react-redux';
import { IPerformer, IUser } from 'src/interfaces';
import { messageService, streamService } from 'src/services';
import LivePublisher from '@components/streaming/publisher';
import { SocketContext, Event } from 'src/socket';
import {
  getStreamConversationSuccess,
  loadStreamMessages,
  resetStreamMessage,
  resetAllStreamMessage
} from '@redux/stream-chat/actions';
import { updateStreamingStatus } from '@redux/performer/actions';
import { WEBRTC_ADAPTOR_INFORMATIONS } from 'src/antmedia/constants';
import ChatBox from '@components/stream-chat/chat-box';
import UpdateSatusForm from '@components/performer/streaming-status-update-form';
import Router from 'next/router';
import { getResponseError } from '@lib/utils';

import './index.less';

// eslint-disable-next-line no-shadow
enum EVENT_NAME {
  ROOM_INFORMATIOM_CHANGED = 'public-room-changed',
  USER_LEFT_ROOM = 'USER_LEFT_ROOM'
}

interface P {
  resetStreamMessage: Function;
  resetAllStreamMessage: Function;
  getStreamConversationSuccess: Function;
  loadStreamMessages: Function;
  updateStreamingStatus: Function;
  activeConversation: any;
  performer: IPerformer;
  updating: boolean;
  updateSuccess: boolean;
  updateError: any;
}

interface S {
  loading: boolean;
  initialized: boolean;
  publish_started: boolean;
  total: number;
  members: IUser[];
}

class PerformerLivePage extends PureComponent<P, S> {
  static authenticate = true;

  private publisherRef: any;

  private socket: SocketIOClient.Socket;

  constructor(props: P) {
    super(props);
    this.state = {
      loading: false,
      initialized: false,
      publish_started: false,
      total: 0,
      members: []
    };
  }

  componentDidMount() {
    this.socket = this.context;
    this.joinPublicRoom();
    window.addEventListener('beforeunload', this.onbeforeunload);
    Router.events.on('routeChangeStart', this.onbeforeunload);
  }

  componentDidUpdate(prevProps: P) {
    const { updateSuccess, updateError } = this.props;
    if (prevProps.updateSuccess !== updateSuccess && updateSuccess) {
      message.success('Update Status Success.');
    }

    if (prevProps.updateError !== updateError && updateError) {
      message.error(getResponseError(updateError));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    Router.events.off('routeChangeStart', this.onbeforeunload);
  }

  handler({ total, members, conversationId }) {
    const { activeConversation } = this.props;
    if (activeConversation?.data?._id === conversationId) {
      this.setState({ total, members });
    }
  }

  handleUpdateStatusForm(data) {
    const { updateStreamingStatus: dispatchUpdateStreamingStatus } = this.props;
    dispatchUpdateStreamingStatus(data);
  }

  onbeforeunload = () => {
    this.leavePublicRoom();
  };

  start() {
    this.publisherRef && this.publisherRef.start();
  }

  stop() {
    window.location.reload();
  }

  async callback(info: WEBRTC_ADAPTOR_INFORMATIONS) {
    const { activeConversation } = this.props;
    if (activeConversation && activeConversation.data) {
      this.socket = this.context;
      if (info === WEBRTC_ADAPTOR_INFORMATIONS.INITIALIZED) {
        this.setState({ initialized: true });
        try {
          this.setState({ loading: true });
          const resp = await streamService.goLive();
          this.publisherRef && this.publisherRef.publish(resp.data.sessionId);
        } catch (e) {
          const error = await Promise.resolve(e);
          message.error(getResponseError(error));
        } finally {
          this.setState({ loading: false });
        }
      } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_STARTED) {
        this.setState({ publish_started: true, loading: false });
        this.socket.emit('public-stream/live', {
          conversationId: activeConversation.data._id
        });
      } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_FINISHED) {
        this.setState({ loading: false, publish_started: false });
      } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.CLOSED) {
        this.setState({
          loading: false,
          initialized: false,
          publish_started: false
        });
      }
    }
  }

  async joinPublicRoom() {
    const {
      loadStreamMessages: dispatchLoadStreamMessages,
      getStreamConversationSuccess: dispatchGetStreamConversationSuccess
    } = this.props;
    try {
      this.setState({ loading: true });
      const resp = await streamService.goLive();
      const { conversation } = resp.data;
      if (conversation && conversation._id) {
        // this.publisherRef && this.publisherRef.start();
        dispatchGetStreamConversationSuccess({ data: conversation });
        dispatchLoadStreamMessages({
          conversationId: conversation._id,
          limit: 25,
          offset: 0,
          type: conversation.type
        });
        this.socket = this.context;
        this.socket
          && this.socket.emit('public-stream/join', {
            conversationId: conversation._id
          });
      }
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ loading: false });
    }
  }

  leavePublicRoom() {
    const {
      activeConversation,
      resetStreamMessage: dispatchResetStreamMessage
    } = this.props;
    if (this.socket && activeConversation && activeConversation.data) {
      const conversation = { ...activeConversation.data };
      this.socket.emit('public-stream/leave', {
        conversationId: conversation._id
      });
      dispatchResetStreamMessage();
    }
  }

  userLeftRoomHandle({ username, conversationId }) {
    const { activeConversation } = this.props;
    if (activeConversation?.data?._id === conversationId) {
      const { total, members } = this.state;
      this.setState({
        total: total - 1,
        members: members.filter((m) => m.username !== username)
      });
    }
  }

  async removeAllMessage() {
    const {
      activeConversation,
      performer,
      resetAllStreamMessage: dispatchResetAllMessage
    } = this.props;
    if (
      !activeConversation.data
      || performer._id !== activeConversation.data.performerId
    ) {
      return;
    }

    try {
      if (!window.confirm('Are you sure you want to remove chat history?')) {
        return;
      }
      await messageService.deleteAllMessageInConversation(
        activeConversation.data._id
      );
      dispatchResetAllMessage({ conversationId: activeConversation.data._id });
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    }
  }

  render() {
    const { performer, activeConversation, updating } = this.props;
    const {
      loading, initialized, publish_started, members, total
    } = this.state;
    return (
      <>
        <Head>
          <title>Go Live</title>
        </Head>

        <Event
          event={EVENT_NAME.ROOM_INFORMATIOM_CHANGED}
          handler={this.handler.bind(this)}
        />
        <Event
          event={EVENT_NAME.USER_LEFT_ROOM}
          handler={this.userLeftRoomHandle.bind(this)}
        />

        <Row>
          <Col xs={24} sm={24} md={12}>
            <UpdateSatusForm
              status={performer.streamingTitle}
              updating={updating}
              submit={this.handleUpdateStatusForm.bind(this)}
            />
            {initialized && publish_started && (
              <Button
                type="text"
                style={{ background: 'black', color: 'white' }}
                onClick={this.stop.bind(this)}
                block
                className="mb-10"
              >
                Stop Publishing
              </Button>
            )}
            {(!initialized || !publish_started) && (
              <Button
                type="primary"
                onClick={this.start.bind(this)}
                loading={loading}
                block
                className="mb-10"
              >
                Start Publishing
              </Button>
            )}
            <LivePublisher
              ref={(ref) => {
                this.publisherRef = ref;
              }}
              onChange={this.callback.bind(this)}
              configs={{
                debug: true,
                bandwidth: 900,
                localVideoId: 'publisher'
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <ChatBox
              {...this.props}
              members={members}
              totalParticipant={total}
              currentPerformer={performer}
            />
            {activeConversation?.data && (
              <div style={{ margin: '10px' }}>
                <Button
                  type="primary"
                  onClick={this.removeAllMessage.bind(this)}
                >
                  Clear message history
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

PerformerLivePage.contextType = SocketContext;

const mapStateToProps = (state) => ({
  performer: state.performer.current,
  updating: state.performer.updating,
  updateSuccess: state.performer.updateSuccess,
  updateError: state.performer.updateError,
  activeConversation: state.streamMessage.activeConversation
});
const mapDispatchs = {
  updateStreamingStatus,
  getStreamConversationSuccess,
  loadStreamMessages,
  resetStreamMessage,
  resetAllStreamMessage
};
export default connect(mapStateToProps, mapDispatchs)(PerformerLivePage);
