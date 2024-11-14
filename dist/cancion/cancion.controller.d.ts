import { CancionService } from './cancion.service';
import { CreateCancionDto } from './cancion.dto';
export declare class CancionController {
    private readonly cancionService;
    constructor(cancionService: CancionService);
    findAll(): Promise<import("./cancion.entity").Cancion[]>;
    findOne(id: string): Promise<import("./cancion.entity").Cancion>;
    findByAlbum(albumId: string): Promise<import("./cancion.entity").Cancion[]>;
    create(createCancionDto: CreateCancionDto): Promise<import("./cancion.entity").Cancion>;
    update(id: string, updateCancionDto: CreateCancionDto): Promise<import("./cancion.entity").Cancion>;
    remove(id: string): Promise<void>;
}
