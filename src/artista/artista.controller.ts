import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ArtistaService } from './artista.service';
import { CreateArtistaDto } from './artista.dto';

@Controller('artista')
export class ArtistaController {
  constructor(private readonly artistaService: ArtistaService) {}

  @Post()
  create(@Body() createArtistaDto: CreateArtistaDto) {
    return this.artistaService.create(createArtistaDto);
  }

  @Get()
  findAll() {
    return this.artistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArtistaDto: CreateArtistaDto) {
    return this.artistaService.update(+id, updateArtistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistaService.remove(+id);
  }
}
