import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Genero } from '../genero/genero.entity';
import { Album } from '../album/album.entity';

@Entity()
export class Artista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 255, nullable: true })
  imagen: string;

  @ManyToOne(() => Genero, (genero) => genero.artistas, { eager: true })
  genero: Genero;

  @OneToMany(() => Album, (album) => album.artista)
  albums: Album[];
}
