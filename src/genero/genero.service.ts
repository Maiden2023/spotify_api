import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genero } from './genero.entity';
import { CreateGeneroDto } from './genero.dto';
import { Artista } from '../artista/artista.entity';
import { Like } from 'typeorm';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private generoRepository: Repository<Genero>,
    @InjectRepository(Artista)
    private readonly artistaRepository: Repository<Artista>,
  ) {}

  create(createGeneroDto: CreateGeneroDto) {
    const genero = this.generoRepository.create(createGeneroDto);
    return this.generoRepository.save(genero);
  }

  findAll() {
    return this.generoRepository.find();
  }

  findOne(id: number) {
    return this.generoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateGeneroDto: CreateGeneroDto) {
    await this.generoRepository.update(id, updateGeneroDto);
    return this.generoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.generoRepository.delete(id);
  }
  async findArtistasByGenero(generoId: number): Promise<Artista[]> {
    return await this.artistaRepository.find({ where: { genero: { id: generoId } } } );
  }
  async search(query: string): Promise<Genero[]> {
    return this.generoRepository.find({
      where: { nombre: Like(`%${query}%`) },
    });
  }
}
