import { Repository } from 'typeorm';
import { Artista } from './artista.entity';
import { Genero } from 'genero/genero.entity';
import { CreateArtistaDto } from './artista.dto';
export declare class ArtistaService {
    private readonly artistaRepository;
    private readonly generoRepository;
    constructor(artistaRepository: Repository<Artista>, generoRepository: Repository<Genero>);
    create(createArtistaDto: CreateArtistaDto): Promise<Artista>;
    findAll(): Promise<Artista[]>;
    findOne(id: number): Promise<Artista>;
    update(id: number, updateArtistaDto: CreateArtistaDto): Promise<Artista>;
    remove(id: number): Promise<void>;
    search(query: string): Promise<Artista[]>;
}
