import { DynamicModule, Module } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { ConfigDto } from "./dtos";

@Module({})
export class ConfigModule {
  public static forRoot(): DynamicModule {
    return {
      module: ConfigModule,
      global: true,
      providers: [
        {
          provide: ConfigDto,
          useFactory: () => ConfigModule.configFactory(),
        },
      ],
      exports: [ConfigDto],
    };
  }

  private static async configFactory(): Promise<ConfigDto> {
    const config = await ConfigModule.loadConfig();
    await ConfigModule.validateConfig(config);

    return config;
  }

  private static async loadConfig(): Promise<ConfigDto> {
    const { plainConfig } = await import("./plainConfig");

    return plainToClass(ConfigDto, plainConfig);
  }

  private static async validateConfig(config: ConfigDto): Promise<void> {
    const errors = await validate(config, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      throw new Error(errors.map((x) => x.toString()).join("\n"));
    }
  }
}
