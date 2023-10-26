import { ConfigDto } from "./dtos";
import { LogLevel } from "./dtos/logger-config.dto";

export const plainConfig: ConfigDto = {
  configEnv: process.env.CONFIG_ENV as string,
  pg: {
    writeConnectionString: process.env.PG_WRITE_CONNECTION_STRING as string,
    readConnectionString: process.env.PG_READ_CONNECTION_STRING as string,
    connectionTimeout: Number(process.env.PG_CONNECTION_TIMEOUT ?? "60000"),
    poolSize: Number(process.env.PG_POOL_SIZE ?? "10"),
  },
  http: {
    port: Number(process.env.HTTP_PORT ?? "8080"),
    host: process.env.HTTP_HOST ?? "0.0.0.0",
    swaggerServer: process.env.SWAGGER_SERVER ?? "/",
    defaultClientTimeout: Number(
      process.env.HTTP_DEFAULT_CLIENT_TIMEOUT ?? "60000",
    ),
  },
  logger: {
    level: (process.env.LOG_LEVEL ?? LogLevel.info) as LogLevel,
    pretty: (process.env.LOG_PRETTY ?? "false") === "true",
  },
};
