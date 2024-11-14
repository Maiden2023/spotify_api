import { ArtistaService } from './artista.service';
import { CreateArtistaDto } from './artista.dto';
export declare class ArtistaController {
    private readonly artistaService;
    constructor(artistaService: ArtistaService);
    create(createArtistaDto: CreateArtistaDto): Promise<import("./artista.entity").Artista>;
    findAll(): Promise<import("./artista.entity").Artista[]>;
    findOne(id: string): Promise<import("./artista.entity").Artista>;
    update(id: string, updateArtistaDto: CreateArtistaDto): Promise<import("./artista.entity").Artista>;
    remove(id: string): Promise<void>;
}
