import { S3ClientConfigType } from '@aws-sdk/client-s3';
import { StreamingBlobPayloadInputTypes } from '@smithy/types';

export interface S3ModuleOptions extends S3ClientConfigType {
  region: Required<S3ClientConfigType>['region'];
  credentials: Required<S3ClientConfigType>['credentials'];
  bucketName: string;
}

export interface S3Object {
  body: StreamingBlobPayloadInputTypes;
  contentType?: string;
}
