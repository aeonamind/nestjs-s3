import {
  S3_BUCKET_PREFIX,
  S3_CLIENT_PREFIX,
  S3_DEFAULT_CLIENT_NAME,
} from '../s3.constants';

export function getClientToken(clientName = S3_DEFAULT_CLIENT_NAME) {
  return `${S3_CLIENT_PREFIX}${clientName}`;
}

export function getBucketToken(
  bucket: string,
  clientName = S3_DEFAULT_CLIENT_NAME,
) {
  return `${S3_CLIENT_PREFIX}${clientName}_${S3_BUCKET_PREFIX}${bucket}`;
}
