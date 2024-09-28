import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from '@/constants/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configServcie = app.get(ConfigService);

  app.setGlobalPrefix('api');

  app.enableCors(CORS);

  await app.listen(configServcie.get('PORT'));

  console.log(`aplication runnning on: ${await app.getUrl()}`);
}
bootstrap();
