import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CancionService } from './cancion.service';
import { CreateCancionDto } from './cancion.dto';

@Controller('cancion')
export class CancionController {
  constructor(private readonly cancionService: CancionService) {}

  @Get()
  findAll() {
    return this.cancionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancionService.findOne(+id);
  }

  @Get('album/:albumId')
  findByAlbum(@Param('albumId') albumId: string) {
    return this.cancionService.findByAlbum(+albumId);
  }
  @Post()
  create(@Body() createCancionDto: CreateCancionDto) {
    return this.cancionService.create(createCancionDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCancionDto: CreateCancionDto) {
    return this.cancionService.update(+id, updateCancionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionService.remove(+id);
  }
}
