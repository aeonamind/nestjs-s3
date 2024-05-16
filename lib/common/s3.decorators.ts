import { Inject } from '@nestjs/common';
import { getBucketToken, getClientToken } from './s3.utils';

export const InjectClient = (clientName?: string) =>
  Inject(getClientToken(clientName));

export const InjectBucket = (bucketName: string, clientName?: string) =>
  Inject(getBucketToken(bucketName, clientName));
