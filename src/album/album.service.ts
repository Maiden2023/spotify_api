import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './album.entity';
import { CreateAlbumDto } from './album.dto';
import { Cancion } from '../cancion/cancion.entity';
import { Like } from 'typeorm';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
    @InjectRepository(Cancion)
    private cancionRepository: Repository<Cancion>,
  ) {}

  async findAll(): Promise<Album[]> {
    return this.albumRepository.find();
  }

  async findOne(id: number): Promise<Album> {
    return this.albumRepository.findOne({ where: { id } });
  }

  async findAlbumsByArtist(artistId: number): Promise<Album[]> {
    return this.albumRepository.find({ where: { artista: { id: artistId } }, relations: ['artista'] });
  }

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const album = this.albumRepository.create(createAlbumDto);
    return this.albumRepository.save(album);
  }

  async update(id: number, updateAlbumDto: CreateAlbumDto): Promise<Album | null> {
    await this.albumRepository.update(id, updateAlbumDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.albumRepository.delete(id);
  }

  async findSongsByAlbum(albumId: number): Promise<Cancion[]> {
    const album = await this.albumRepository.findOne({ where: { id: albumId } });
    if (!album) {
      throw new NotFoundException(`Album with ID ${albumId} not found`);
    }
    return this.cancionRepository.find({
      where: { album: { id: albumId } }, // Cambia a esta estructura
    });
  }

  async search(query: string): Promise<Album[]> {
    return this.albumRepository.find({
      where: { titulo: Like(`%${query}%`) },
    });
  }
}
