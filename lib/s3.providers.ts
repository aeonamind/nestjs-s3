import { Provider } from '@nestjs/common';
import {
  DeleteObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getBucketToken, getClientToken } from './common';
import { S3Object, S3BucketService } from './interfaces';

export function createS3Providers(
  bucketNames: string[],
  clientName?: string,
): Provider<S3BucketService>[] {
  return (bucketNames || []).map((bucketName) => ({
    provide: getBucketToken(bucketName, clientName),
    useFactory: (client: S3Client) => ({
      async putObject(key: string, object: S3Object) {
        return client.send(
          new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: object.body,
            ContentType: object.contentType,
          }),
        );
      },

      async getObject(key: string) {
        return client.send(
          new GetObjectCommand({
            Bucket: bucketName,
            Key: key,
          }),
        );
      },

      async listObjectsV2(prefix?: string) {
        return client.send(
          new ListObjectsV2Command({
            Bucket: bucketName,
            Prefix: prefix,
          }),
        );
      },

      async deleteObject(key: string) {
        return client.send(
          new DeleteObjectCommand({
            Bucket: bucketName,
            Key: key,
          }),
        );
      },
    }),
    inject: [getClientToken(clientName)],
  }));
}
