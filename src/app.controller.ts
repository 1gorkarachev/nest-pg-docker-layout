import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("App")
@Controller({
  path: "app",
  version: "1",
})
export class AppController {
  @Get()
  public hello(): string {
    return "Hello world!";
  }
}
