import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(process.env.PORT) || 3000);
}
bootstrap();
