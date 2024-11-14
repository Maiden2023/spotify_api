import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cancion } from './cancion.entity';
import { CreateCancionDto } from './cancion.dto';
import { Like } from 'typeorm';

@Injectable()
export class CancionService {
  artistaRepository: any;
  constructor(
    @InjectRepository(Cancion)
    private cancionRepository: Repository<Cancion>,
  ) {}

  create(createCancionDto: CreateCancionDto) {
    const cancion = this.cancionRepository.create(createCancionDto);
    return this.cancionRepository.save(cancion);
  }

  //async findAll() {
  //  console.log(this.artistaRepository.find({ relations: ['genero'] }));
 //   return this.cancionRepository.find({ relations: ['album'] });
//}

  async findAll(): Promise<Cancion[]> {
    return this.cancionRepository.find();
  }
  findOne(id: number) {
    return this.cancionRepository.findOne({
      where: { id },
      relations: ['album'],
    });
  }
  findByAlbum(albumId: number) {
    return this.cancionRepository.find({ where: { albumId } });
  }
  async update(id: number, updateCancionDto: CreateCancionDto) {
    await this.cancionRepository.update(id, updateCancionDto);
    return this.cancionRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.cancionRepository.delete(id);
  }
  async search(query: string): Promise<Cancion[]> {
    return this.cancionRepository.find({
      where: { titulo: Like(`%${query}%`) },
    });
  }
}
