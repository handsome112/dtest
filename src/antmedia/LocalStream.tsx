import { AudioHTMLAttributes, VideoHTMLAttributes } from 'react';
import classnames from 'classnames';

export interface HTMLMediaProps
  extends AudioHTMLAttributes<any>,
    VideoHTMLAttributes<any> {
  id: string;
  classNames?: string;
}

export const LocalStream = ({ classNames, ...rest }: HTMLMediaProps) => (
  <video
    {...rest}
    className={classnames('video-js broadcaster', classNames)}
    muted
    controls
    playsInline
    autoPlay
    preload="auto"
  />
);
