import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigDto } from "./infrastructure/config";
import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";
import { Logger, LoggerErrorInterceptor } from "nestjs-pino";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { PackageJsonDto } from "./infrastructure/packageJson";

function setupSwagger(app: NestExpressApplication): void {
  const config = app.get(ConfigDto);
  const packageJson = app.get(PackageJsonDto);

  const options = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setVersion(packageJson.version)
    .setDescription(packageJson.description)
    .addServer(config.http.swaggerServer)
    .build();

  SwaggerModule.setup("api", app, SwaggerModule.createDocument(app, options));
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    await AppModule.register(),
    new ExpressAdapter(),
    {
      bufferLogs: true,
    },
  );

  const config = app.get(ConfigDto);
  const logger = app.get(Logger);

  app.useLogger(logger);
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  setupSwagger(app);

  await app.listen(config.http.port, config.http.host);

  logger.log(
    "Nest application listening on %s",
    await app.getUrl(),
    "NestApplication",
  );
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
