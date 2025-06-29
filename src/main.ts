import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json());

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();

// /api/products

// /api/reviews

// /api/users
