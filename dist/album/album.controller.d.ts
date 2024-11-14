import { HttpStatus } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './album.dto';
import { ArtistaService } from '../artista/artista.service';
import { CancionService } from '../cancion/cancion.service';
import { GeneroService } from '../genero/genero.service';
export declare class AlbumController {
    private readonly albumService;
    private readonly artistaService;
    private readonly cancionService;
    private readonly generoService;
    constructor(albumService: AlbumService, artistaService: ArtistaService, cancionService: CancionService, generoService: GeneroService);
    search(query: string): Promise<{
        albums: import("./album.entity").Album[];
        artistas: import("../artista/artista.entity").Artista[];
        canciones: import("../cancion/cancion.entity").Cancion[];
        generos: import("../genero/genero.entity").Genero[];
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./album.entity").Album[];
    }>;
    findSongsByAlbum(id: string): Promise<import("../cancion/cancion.entity").Cancion[]>;
    findOne(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./album.entity").Album;
    }>;
    findAlbumsByArtist(artistId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./album.entity").Album[];
    }>;
    create(createAlbumDto: CreateAlbumDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./album.entity").Album;
    }>;
    update(id: string, updateAlbumDto: CreateAlbumDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./album.entity").Album;
    }>;
    remove(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
