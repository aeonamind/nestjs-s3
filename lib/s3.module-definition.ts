import { ConfigurableModuleBuilder } from '@nestjs/common';
import { S3ExtraModuleDefinitionOptions, S3ModuleOptions } from './interfaces';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<S3ModuleOptions>()
  .setExtras<S3ExtraModuleDefinitionOptions>(
    { isGlobal: true },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }),
  )
  .setClassMethodName('forRoot')
  .build();
