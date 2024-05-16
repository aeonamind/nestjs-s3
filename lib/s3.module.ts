import { DynamicModule, Module } from '@nestjs/common';
import { createS3Providers } from './s3.providers';
import { S3CoreModule } from './s3-core.module';
import { ASYNC_OPTIONS_TYPE, OPTIONS_TYPE } from './s3.module-definition';

@Module({})
export class S3Module {
  static forRoot(
    options: typeof OPTIONS_TYPE & { clientName: string },
  ): DynamicModule {
    return {
      module: S3Module,
      imports: [S3CoreModule.forRoot(options)],
    };
  }

  static forRootAsync(
    options: typeof ASYNC_OPTIONS_TYPE & { clientName: string },
  ): DynamicModule {
    return {
      module: S3Module,
      imports: [S3CoreModule.forRootAsync(options)],
    };
  }

  static forFeature(bucketNames: string[], clientName?: string): DynamicModule {
    const providers = createS3Providers(bucketNames, clientName);
    return {
      module: S3Module,
      providers: [...providers],
      exports: providers,
    };
  }
}
