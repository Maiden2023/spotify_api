import { Genero } from '../genero/genero.entity';
import { Album } from '../album/album.entity';
export declare class Artista {
    id: number;
    nombre: string;
    imagen: string;
    genero: Genero;
    albums: Album[];
}
