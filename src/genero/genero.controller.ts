import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './genero.dto';

@Controller('genero')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.create(createGeneroDto);
  }

  @Get()
  findAll() {
    return this.generoService.findAll();
  }
  @Get(':generoId/artista')
  findArtistasByGenero(@Param('generoId') generoId: number) {
    return this.generoService.findArtistasByGenero(generoId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGeneroDto: CreateGeneroDto) {
    return this.generoService.update(+id, updateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generoService.remove(+id);
  }
}
