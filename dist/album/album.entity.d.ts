import { Artista } from '../artista/artista.entity';
import { Cancion } from '../cancion/cancion.entity';
export declare class Album {
    id: number;
    titulo: string;
    imagen: string;
    artista: Artista;
    canciones: Cancion[];
}
