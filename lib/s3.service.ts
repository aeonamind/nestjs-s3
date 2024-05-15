import { Inject, Injectable } from '@nestjs/common';
import {
  DeleteObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';

import { MODULE_OPTIONS_TOKEN } from './s3.module-definition';
import { S3ModuleOptions, S3Object } from './s3.interface';

@Injectable()
export class S3Service {
  private readonly s3Client: S3Client;

  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: S3ModuleOptions) {
    this.s3Client = new S3Client(options);
  }

  async putObject(key: string, object: S3Object) {
    return this.s3Client.send(
      new PutObjectCommand({
        Bucket: this.options.bucketName,
        Key: key,
        Body: object.body,
        ContentType: object.contentType,
      }),
    );
  }

  async getObject(key: string) {
    return this.s3Client.send(
      new GetObjectCommand({
        Bucket: this.options.bucketName,
        Key: key,
      }),
    );
  }

  async listObjectsV2(prefix?: string) {
    return this.s3Client.send(
      new ListObjectsV2Command({
        Bucket: this.options.bucketName,
        Prefix: prefix,
      }),
    );
  }

  deleteObject(key: string) {
    return this.s3Client.send(
      new DeleteObjectCommand({ Bucket: this.options.bucketName, Key: key }),
    );
  }
}
