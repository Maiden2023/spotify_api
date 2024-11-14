import { Repository } from 'typeorm';
import { Album } from './album.entity';
import { CreateAlbumDto } from './album.dto';
import { Cancion } from '../cancion/cancion.entity';
export declare class AlbumService {
    private albumRepository;
    private cancionRepository;
    constructor(albumRepository: Repository<Album>, cancionRepository: Repository<Cancion>);
    findAll(): Promise<Album[]>;
    findOne(id: number): Promise<Album>;
    findAlbumsByArtist(artistId: number): Promise<Album[]>;
    create(createAlbumDto: CreateAlbumDto): Promise<Album>;
    update(id: number, updateAlbumDto: CreateAlbumDto): Promise<Album | null>;
    remove(id: number): Promise<void>;
    findSongsByAlbum(albumId: number): Promise<Cancion[]>;
    search(query: string): Promise<Album[]>;
}
