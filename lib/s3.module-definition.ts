import { ConfigurableModuleBuilder } from '@nestjs/common';
import { S3ModuleOptions } from './s3.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<S3ModuleOptions>().build();
