import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Artista } from './artista.entity';
import { Genero } from 'genero/genero.entity';
import { CreateArtistaDto } from './artista.dto';

@Injectable()
export class ArtistaService {
  constructor(
    @InjectRepository(Artista)
    private readonly artistaRepository: Repository<Artista>,
    @InjectRepository(Genero)
    private readonly generoRepository: Repository<Genero>,
  ) {}

  async create(createArtistaDto: CreateArtistaDto): Promise<Artista> {
    const genero = await this.generoRepository.findOne({
      where: { id: createArtistaDto.generoId },
    });

    if (!genero) {
      throw new NotFoundException('Genero not found');
    }

    const artista = this.artistaRepository.create({
      ...createArtistaDto,
      genero,
    });
    return this.artistaRepository.save(artista);
  }

  async findAll(): Promise<Artista[]> {
    return this.artistaRepository.find({ relations: ['genero'] });
  }

  async findOne(id: number): Promise<Artista> {
    const artista = await this.artistaRepository.findOne({
      where: { id },
      relations: ['genero'],
    });
    if (!artista) {
      throw new NotFoundException(`Artista with ID ${id} not found`);
    }
    return artista;
  }

  async update(id: number, updateArtistaDto: CreateArtistaDto): Promise<Artista> {
    const genero = await this.generoRepository.findOne({
      where: { id: updateArtistaDto.generoId },
    });

    if (!genero) {
      throw new NotFoundException('Genero not found');
    }

    await this.artistaRepository.update(id, { ...updateArtistaDto, genero });
    const updatedArtista = await this.artistaRepository.findOne({
      where: { id },
      relations: ['genero'],
    });

    if (!updatedArtista) {
      throw new NotFoundException(`Artista with ID ${id} not found`);
    }

    return updatedArtista;
  }

  async remove(id: number): Promise<void> {
    const result = await this.artistaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Artista with ID ${id} not found`);
    }
  }

  async search(query: string): Promise<Artista[]> {
    return this.artistaRepository.find({
      where: { nombre: Like(`%${query}%`) },
      relations: ['genero'],
    });
  }
}
