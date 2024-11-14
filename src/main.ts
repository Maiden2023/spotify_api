import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    methods: '*',
    credentials: true,
  });

  app.use('/img_album', express.static(join(__dirname, '..', 'src', 'img_album')));
  app.use('/img_artista', express.static(join(__dirname, '..', 'src', 'img_artista')));
  app.use('/img_genero', express.static(join(__dirname, '..', 'src', 'img_genero')));
  app.use('/musica', express.static(join(__dirname, '..', 'src', 'musica')));

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
