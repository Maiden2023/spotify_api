import { Album } from '../album/album.entity';
export declare class Cancion {
    id: number;
    titulo: string;
    archivo_mp3: string;
    album: Album;
    albumId: number;
}
