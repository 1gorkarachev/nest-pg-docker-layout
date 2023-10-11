import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";

import { BaseExceptionFilter } from "./baseExceptionFilter";

@Catch()
export class CatchAllExceptionFilter implements ExceptionFilter<unknown> {
  public constructor(
    private readonly baseExceptionFilter: BaseExceptionFilter,
  ) {}

  public catch(exception: unknown, host: ArgumentsHost): void {
    this.baseExceptionFilter.catch(exception, host);
  }
}
