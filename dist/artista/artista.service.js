"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const artista_entity_1 = require("./artista.entity");
const genero_entity_1 = require("../genero/genero.entity");
let ArtistaService = class ArtistaService {
    constructor(artistaRepository, generoRepository) {
        this.artistaRepository = artistaRepository;
        this.generoRepository = generoRepository;
    }
    async create(createArtistaDto) {
        const genero = await this.generoRepository.findOne({
            where: { id: createArtistaDto.generoId },
        });
        if (!genero) {
            throw new common_1.NotFoundException('Genero not found');
        }
        const artista = this.artistaRepository.create({
            ...createArtistaDto,
            genero,
        });
        return this.artistaRepository.save(artista);
    }
    async findAll() {
        return this.artistaRepository.find({ relations: ['genero'] });
    }
    async findOne(id) {
        const artista = await this.artistaRepository.findOne({
            where: { id },
            relations: ['genero'],
        });
        if (!artista) {
            throw new common_1.NotFoundException(`Artista with ID ${id} not found`);
        }
        return artista;
    }
    async update(id, updateArtistaDto) {
        const genero = await this.generoRepository.findOne({
            where: { id: updateArtistaDto.generoId },
        });
        if (!genero) {
            throw new common_1.NotFoundException('Genero not found');
        }
        await this.artistaRepository.update(id, { ...updateArtistaDto, genero });
        const updatedArtista = await this.artistaRepository.findOne({
            where: { id },
            relations: ['genero'],
        });
        if (!updatedArtista) {
            throw new common_1.NotFoundException(`Artista with ID ${id} not found`);
        }
        return updatedArtista;
    }
    async remove(id) {
        const result = await this.artistaRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Artista with ID ${id} not found`);
        }
    }
    async search(query) {
        return this.artistaRepository.find({
            where: { nombre: (0, typeorm_2.Like)(`%${query}%`) },
            relations: ['genero'],
        });
    }
};
exports.ArtistaService = ArtistaService;
exports.ArtistaService = ArtistaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(artista_entity_1.Artista)),
    __param(1, (0, typeorm_1.InjectRepository)(genero_entity_1.Genero)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ArtistaService);
//# sourceMappingURL=artista.service.js.map