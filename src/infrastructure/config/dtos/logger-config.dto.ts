import { IsBoolean, IsEnum } from "class-validator";

export enum LogLevel {
  fatal = "fatal",
  error = "error",
  warn = "warn",
  info = "info",
  debug = "debug",
  trace = "trace",
  silent = "silent",
}

export class LoggerConfigDto {
  @IsEnum(LogLevel)
  public readonly level!: LogLevel;

  @IsBoolean()
  public readonly pretty!: boolean;
}
