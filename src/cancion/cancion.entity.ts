import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Album } from '../album/album.entity';

@Entity()
export class Cancion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  titulo: string;

  @Column({ length: 255, nullable: true })
  archivo_mp3: string;

  @ManyToOne(() => Album, (album) => album.canciones)
  album: Album;

  @Column()
  albumId: number;
}
