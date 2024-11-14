import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumModule } from './album/album.module';
import { ArtistaModule } from './artista/artista.module';
import { GeneroModule } from './genero/genero.module';
import { CancionModule } from './cancion/cancion.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Genero } from './genero/genero.entity';
import { Artista } from './artista/artista.entity';
import { Album } from './album/album.entity';
import { Cancion } from './cancion/cancion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'spotify',
      entities: [Genero, Artista, Album, Cancion],
      synchronize: true,
    }),
    AlbumModule,
    ArtistaModule,
    GeneroModule,
    CancionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
