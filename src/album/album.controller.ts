import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  InternalServerErrorException,
  HttpStatus,
  HttpCode,
  Query,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './album.dto';
import { ArtistaService } from '../artista/artista.service';
import { CancionService } from '../cancion/cancion.service';
import { GeneroService } from '../genero/genero.service';

@Controller('album')
export class AlbumController {
  constructor(
    private readonly albumService: AlbumService,
    private readonly artistaService: ArtistaService,
    private readonly cancionService: CancionService,
    private readonly generoService: GeneroService, // Asegúrate de que esté incluido
  ) {}

  @Get('search')
  async search(@Query('query') query: string) {
    if (!query) {
      throw new NotFoundException('No search query provided');
    }

    const albums = await this.albumService.search(query);
    const artistas = await this.artistaService.search(query);
    const canciones = await this.cancionService.search(query);
    const generos = await this.generoService.search(query);

    return {
      albums,
      artistas,
      canciones,
      generos,
    };
  }
  @Get()
  async findAll() {
    try {
      const albums = await this.albumService.findAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Albums retrieved successfully',
        data: albums,
      };
    } catch {
      throw new InternalServerErrorException('Error fetching albums');
    }
  }

  @Get(':id/canciones')
  async findSongsByAlbum(@Param('id') id: string) {
    return this.albumService.findSongsByAlbum(+id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const album = await this.albumService.findOne(+id);
      if (!album) {
        throw new NotFoundException(`Album with ID ${id} not found`);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Album retrieved successfully',
        data: album,
      };
    } catch (error) {
      throw error instanceof NotFoundException
        ? error
        : new InternalServerErrorException();
    }
  }

  @Get('artista/:id')
  async findAlbumsByArtist(@Param('id') artistId: string) {
    try {
      const albums = await this.albumService.findAlbumsByArtist(+artistId);
      if (!albums || albums.length === 0) {
        throw new NotFoundException(`Albums for artist with ID ${artistId} not found`);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Albums retrieved successfully',
        data: albums,
      };
    } catch (error) {
      throw error instanceof NotFoundException
        ? error
        : new InternalServerErrorException('Error fetching albums by artist');
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createAlbumDto: CreateAlbumDto) {
    try {
      const album = await this.albumService.create(createAlbumDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Album created successfully',
        data: album,
      };
    } catch {
      throw new InternalServerErrorException('Error creating album');
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAlbumDto: CreateAlbumDto,
  ) {
    try {
      const updatedAlbum = await this.albumService.update(+id, updateAlbumDto);
      if (!updatedAlbum) {
        throw new NotFoundException(`Album with ID ${id} not found`);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Album updated successfully',
        data: updatedAlbum,
      };
    } catch (error) {
      throw error instanceof NotFoundException
        ? error
        : new InternalServerErrorException('Error updating album');
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    try {
      await this.albumService.remove(+id);
      return {
        statusCode: HttpStatus.NO_CONTENT,
        message: 'Album deleted successfully',
      };
    } catch {
      throw new InternalServerErrorException('Error deleting album');
    }
  }
}
