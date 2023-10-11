import { Global, Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";

import {
  BaseExceptionFilter,
  CatchAllExceptionFilter,
} from "./exceptionFilters";

@Global()
@Module({
  providers: [
    BaseExceptionFilter,
    {
      provide: APP_FILTER,
      useClass: CatchAllExceptionFilter,
    },
  ],
})
export class ExceptionsModule {}
