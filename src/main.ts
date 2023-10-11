import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigDto } from "./infrastructure/config";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    await AppModule.register(),
  );

  const config = app.get(ConfigDto);
  await app.listen(config.http.port, config.http.host);

  console.log(
    "Nest application listening on %s",
    await app.getUrl(),
    "NestApplication",
  );
}
bootstrap();
