import { DynamicModule, Module } from '@nestjs/common';
import { S3Client } from '@aws-sdk/client-s3';
import {
  ASYNC_OPTIONS_TYPE,
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from './s3.module-definition';
import { getClientToken } from './common';
import { S3ModuleOptions } from './interfaces';

@Module({})
export class S3CoreModule extends ConfigurableModuleClass {
  static forRoot(
    options: typeof OPTIONS_TYPE & { clientName: string },
  ): DynamicModule {
    return {
      ...super.forRoot(options),
      providers: [
        ...super.forRoot(options).providers,
        {
          provide: getClientToken(options.clientName),
          useFactory: (options: S3ModuleOptions) => new S3Client(options),
          inject: [MODULE_OPTIONS_TOKEN],
        },
      ],
      exports: [getClientToken(options.clientName)],
    };
  }

  static forRootAsync(
    options: typeof ASYNC_OPTIONS_TYPE & { clientName: string },
  ): DynamicModule {
    return {
      ...super.forRootAsync(options),
      providers: [
        ...super.forRootAsync(options).providers,
        {
          provide: getClientToken(options.clientName),
          useFactory: (options: S3ModuleOptions) => new S3Client(options),
          inject: [MODULE_OPTIONS_TOKEN],
        },
      ],
      exports: [getClientToken(options.clientName)],
    };
  }
}
