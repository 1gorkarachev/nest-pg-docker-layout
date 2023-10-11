import { Type } from "class-transformer";
import { IsDefined, IsString, ValidateNested } from "class-validator";

import { HttpConfigDto } from "./httpConfigDto";
import { PgConfigDto } from "./pgConfigDto";

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
}
