import { S3ClientConfigType } from '@aws-sdk/client-s3';

export interface S3ModuleOptions extends S3ClientConfigType {
  region: Required<S3ClientConfigType>['region'];
  credentials: Required<S3ClientConfigType>['credentials'];
}

export interface S3ExtraModuleDefinitionOptions {
  isGlobal?: boolean;
}
