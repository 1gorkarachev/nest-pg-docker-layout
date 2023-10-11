import { Module } from "@nestjs/common";
import { ConfigModule } from "./config/configModule";
import { PostgresModule } from "./postgres/postgres.module";
import { ExceptionsModule } from "./exceptions/exceptionsModule";

@Module({
  imports: [ConfigModule.forRoot(), PostgresModule, ExceptionsModule],
})
export class InfrastructureModule {}
