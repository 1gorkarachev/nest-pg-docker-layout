import { DynamicModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({})
export class AppModule {
  public static async register(): Promise<DynamicModule> {
    const { InfrastructureModule } = await import(
      "./infrastructure/infrastructure.module"
    );

    return {
      module: AppModule,
      controllers: [AppController],
      imports: [InfrastructureModule],
    };
  }
}
