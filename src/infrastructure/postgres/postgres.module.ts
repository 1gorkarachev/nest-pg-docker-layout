import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigDto } from "../config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigDto],
      useFactory: (config: ConfigDto) => ({
        type: "postgres",
        entities: [],
        logging: "all",
        logger: "debug",
        extra: {
          max: config.pg.poolSize,
        },
        replication: {
          master: {
            url: config.pg.writeConnectionString,
          },
          slaves: [
            {
              url: config.pg.readConnectionString,
            },
          ],
        },
        connectTimeoutMS: config.pg.connectionTimeout,
      }),
    }),
  ],
})
export class PostgresModule {}
