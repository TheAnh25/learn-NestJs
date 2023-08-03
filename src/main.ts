import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Add middleware Here
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4444, () => {
    console.log('connecting to Nest successfully');
  });
}
bootstrap();
