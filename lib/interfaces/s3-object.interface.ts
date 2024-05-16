import { StreamingBlobPayloadInputTypes } from '@smithy/types';

export interface S3Object {
  body: StreamingBlobPayloadInputTypes;
  contentType?: string;
}
