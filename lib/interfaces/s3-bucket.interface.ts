import {
  DeleteObjectCommandOutput,
  GetObjectCommandOutput,
  ListObjectsV2CommandOutput,
  PutObjectCommandOutput,
} from '@aws-sdk/client-s3';
import { S3Object } from './s3-object.interface';

export interface S3BucketService {
  putObject(key: string, object: S3Object): Promise<PutObjectCommandOutput>;

  getObject(key: string): Promise<GetObjectCommandOutput>;

  listObjectsV2(prefix?: string): Promise<ListObjectsV2CommandOutput>;

  deleteObject(key: string): Promise<DeleteObjectCommandOutput>;
}
