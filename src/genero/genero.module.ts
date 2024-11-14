// genero/genero.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { Genero } from './genero.entity';
import { Artista } from 'artista/artista.entity';
//import { Artista } from '../artista/artista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genero,Artista])],
  controllers: [GeneroController],
  providers: [GeneroService],
  exports: [GeneroService,TypeOrmModule],
})
export class GeneroModule {}
