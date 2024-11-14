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
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const album_entity_1 = require("./album.entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const typeorm_3 = require("typeorm");
let AlbumService = class AlbumService {
    constructor(albumRepository, cancionRepository) {
        this.albumRepository = albumRepository;
        this.cancionRepository = cancionRepository;
    }
    async findAll() {
        return this.albumRepository.find();
    }
    async findOne(id) {
        return this.albumRepository.findOne({ where: { id } });
    }
    async findAlbumsByArtist(artistId) {
        return this.albumRepository.find({ where: { artista: { id: artistId } }, relations: ['artista'] });
    }
    async create(createAlbumDto) {
        const album = this.albumRepository.create(createAlbumDto);
        return this.albumRepository.save(album);
    }
    async update(id, updateAlbumDto) {
        await this.albumRepository.update(id, updateAlbumDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.albumRepository.delete(id);
    }
    async findSongsByAlbum(albumId) {
        const album = await this.albumRepository.findOne({ where: { id: albumId } });
        if (!album) {
            throw new common_1.NotFoundException(`Album with ID ${albumId} not found`);
        }
        return this.cancionRepository.find({
            where: { album: { id: albumId } },
        });
    }
    async search(query) {
        return this.albumRepository.find({
            where: { titulo: (0, typeorm_3.Like)(`%${query}%`) },
        });
    }
};
exports.AlbumService = AlbumService;
exports.AlbumService = AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(album_entity_1.Album)),
    __param(1, (0, typeorm_1.InjectRepository)(cancion_entity_1.Cancion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AlbumService);
//# sourceMappingURL=album.service.js.map