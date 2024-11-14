// album/album.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { Album } from './album.entity';
import { Cancion } from '../cancion/cancion.entity';
import { Genero } from '../genero/genero.entity';
import { ArtistaModule } from '../artista/artista.module';
import { CancionModule } from '../cancion/cancion.module';
import { GeneroModule } from '../genero/genero.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Album, Cancion, Genero]),
    ArtistaModule,
    CancionModule,
    GeneroModule,
  ],
  providers: [AlbumService],
  controllers: [AlbumController],
})
export class AlbumModule {}
