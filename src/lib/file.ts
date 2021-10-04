import { message } from 'antd';
import { RcFile } from 'antd/lib/upload';

export function beforeAvatarUpload(file: RcFile): boolean {
  const ext = file.name.split('.').pop().toLowerCase();
  const isImageAccept = process.env.NEXT_PUBLIC_IMAGE_ACCPET
    .split(',')
    .map((item: string) => item.trim())
    .indexOf(`.${ext}`);
  if (isImageAccept === -1) {
    message.error(`You can only upload ${process.env.NEXT_PUBLIC_IMAGE_ACCPET} file!`);
    return false;
  }

  const isLt2M = file.size / 1024 / 1024 < (process.env.NEXT_PUBLIC_MAXIMUM_SIZE_UPLOAD_AVATAR || 2);
  if (!isLt2M) {
    message.error(
      `Image must smaller than ${process.env.NEXT_PUBLIC_MAXIMUM_SIZE_UPLOAD_AVATAR || 2}MB!`
    );
    return false;
  }

  return true;
}
