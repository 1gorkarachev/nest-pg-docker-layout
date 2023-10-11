import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'postgres',
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  migrationsTransactionMode:
    (process.env.TYPEORM_MIGRATIONS_TRANSACTION_MODE as
      | 'all'
      | 'each'
      | undefined) ?? 'each',
  logger: 'advanced-console',
  url: process.env.PG_WRITE_CONNECTION_STRING as string,
  connectTimeoutMS: Number(process.env.PG_CONNECTION_TIMEOUT ?? '60000'),
});
