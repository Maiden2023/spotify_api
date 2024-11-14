import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artista } from './artista.entity';
import { ArtistaService } from './artista.service';
import { ArtistaController } from './artista.controller';
import { GeneroModule } from 'genero/genero.module';

@Module({
  imports: [TypeOrmModule.forFeature([Artista]),
  GeneroModule],
  providers: [ArtistaService],
  controllers: [ArtistaController],
  exports: [ArtistaService, TypeOrmModule], // Asegúrate de exportar TypeOrmModule aquí
})
export class ArtistaModule {}
