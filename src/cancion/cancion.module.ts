import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CancionService } from './cancion.service';
import { CancionController } from './cancion.controller';
import { Cancion } from './cancion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cancion])],
  controllers: [CancionController],
  providers: [CancionService],
  exports: [CancionService],
})
export class CancionModule {}
