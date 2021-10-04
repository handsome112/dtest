export const DEFAULT_OFFLINE_IMAGE_URL = '/offline.png';
export const DEFAULT_PRIVATE_IMAGE_URL = '/private.png';
export const DEFAULT_GROUP_IMAGE_URL = '/group.png';
export const DEFAULT_ONLINE_IMAGE_URL = '';

export function getPoster(status: string): string {
  let poster = '';
  switch (status) {
    case 'private':
      poster = DEFAULT_PRIVATE_IMAGE_URL;
      break;
    case 'offline':
      poster = DEFAULT_OFFLINE_IMAGE_URL;
      break;
    case 'public':
      poster = DEFAULT_ONLINE_IMAGE_URL;
      break;
    case 'group':
      poster = DEFAULT_GROUP_IMAGE_URL;
      break;
    default:
      poster = DEFAULT_OFFLINE_IMAGE_URL;
      break;
  }
  return poster;
}
