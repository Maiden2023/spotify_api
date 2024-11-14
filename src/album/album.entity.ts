import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Artista } from '../artista/artista.entity';
import { Cancion } from '../cancion/cancion.entity';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  titulo: string;

  @Column({ length: 255, nullable: true })
  imagen: string;

  @ManyToOne(() => Artista, (artista) => artista.albums)
  artista: Artista;

  @OneToMany(() => Cancion, (cancion) => cancion.album)
  canciones: Cancion[];
}
