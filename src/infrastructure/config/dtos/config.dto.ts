import { Type } from "class-transformer";
import { IsDefined, IsString, ValidateNested } from "class-validator";

import { HttpConfigDto } from "./http-config.dto";
import { PgConfigDto } from "./pg-config.dto";
import { LoggerConfigDto } from "./logger-config.dto";

export class ConfigDto {
  @IsString()
  public readonly configEnv!: string;

  @Type(() => PgConfigDto)
  @IsDefined()
  @ValidateNested()
  public readonly pg!: PgConfigDto;

  @Type(() => HttpConfigDto)
  @IsDefined()
  @ValidateNested()
  public readonly http!: HttpConfigDto;

  @Type(() => LoggerConfigDto)
  @IsDefined()
  @ValidateNested()
  public readonly logger!: LoggerConfigDto;
}
