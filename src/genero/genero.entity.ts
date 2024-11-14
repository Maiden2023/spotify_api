import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Artista } from '../artista/artista.entity';

@Entity()
export class Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 255, nullable: true })
  imagen: string;

  @OneToMany(() => Artista, (artista) => artista.genero)
  artistas: Artista[];
}
