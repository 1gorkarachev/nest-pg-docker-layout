import { Module } from "@nestjs/common";
import { ConfigModule } from "./config/config.module";
import { PostgresModule } from "./postgres/postgres.module";
import { ExceptionsModule } from "./exceptions/exceptionsModule";
import { LoggerModule } from "./logger/logger.module";
import { PackageJsonModule } from "./packageJson/package-json.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule,
    PackageJsonModule,
    PostgresModule,
    ExceptionsModule,
  ],
})
export class InfrastructureModule {}
