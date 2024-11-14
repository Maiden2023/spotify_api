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
exports.AlbumController = void 0;
const common_1 = require("@nestjs/common");
const album_service_1 = require("./album.service");
const album_dto_1 = require("./album.dto");
const artista_service_1 = require("../artista/artista.service");
const cancion_service_1 = require("../cancion/cancion.service");
const genero_service_1 = require("../genero/genero.service");
let AlbumController = class AlbumController {
    constructor(albumService, artistaService, cancionService, generoService) {
        this.albumService = albumService;
        this.artistaService = artistaService;
        this.cancionService = cancionService;
        this.generoService = generoService;
    }
    async search(query) {
        if (!query) {
            throw new common_1.NotFoundException('No search query provided');
        }
        const albums = await this.albumService.search(query);
        const artistas = await this.artistaService.search(query);
        const canciones = await this.cancionService.search(query);
        const generos = await this.generoService.search(query);
        return {
            albums,
            artistas,
            canciones,
            generos,
        };
    }
    async findAll() {
        try {
            const albums = await this.albumService.findAll();
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Albums retrieved successfully',
                data: albums,
            };
        }
        catch {
            throw new common_1.InternalServerErrorException('Error fetching albums');
        }
    }
    async findSongsByAlbum(id) {
        return this.albumService.findSongsByAlbum(+id);
    }
    async findOne(id) {
        try {
            const album = await this.albumService.findOne(+id);
            if (!album) {
                throw new common_1.NotFoundException(`Album with ID ${id} not found`);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Album retrieved successfully',
                data: album,
            };
        }
        catch (error) {
            throw error instanceof common_1.NotFoundException
                ? error
                : new common_1.InternalServerErrorException();
        }
    }
    async findAlbumsByArtist(artistId) {
        try {
            const albums = await this.albumService.findAlbumsByArtist(+artistId);
            if (!albums || albums.length === 0) {
                throw new common_1.NotFoundException(`Albums for artist with ID ${artistId} not found`);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Albums retrieved successfully',
                data: albums,
            };
        }
        catch (error) {
            throw error instanceof common_1.NotFoundException
                ? error
                : new common_1.InternalServerErrorException('Error fetching albums by artist');
        }
    }
    async create(createAlbumDto) {
        try {
            const album = await this.albumService.create(createAlbumDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Album created successfully',
                data: album,
            };
        }
        catch {
            throw new common_1.InternalServerErrorException('Error creating album');
        }
    }
    async update(id, updateAlbumDto) {
        try {
            const updatedAlbum = await this.albumService.update(+id, updateAlbumDto);
            if (!updatedAlbum) {
                throw new common_1.NotFoundException(`Album with ID ${id} not found`);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Album updated successfully',
                data: updatedAlbum,
            };
        }
        catch (error) {
            throw error instanceof common_1.NotFoundException
                ? error
                : new common_1.InternalServerErrorException('Error updating album');
        }
    }
    async remove(id) {
        try {
            await this.albumService.remove(+id);
            return {
                statusCode: common_1.HttpStatus.NO_CONTENT,
                message: 'Album deleted successfully',
            };
        }
        catch {
            throw new common_1.InternalServerErrorException('Error deleting album');
        }
    }
};
exports.AlbumController = AlbumController;
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/canciones'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "findSongsByAlbum", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('artista/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "findAlbumsByArtist", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [album_dto_1.CreateAlbumDto]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, album_dto_1.CreateAlbumDto]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "remove", null);
exports.AlbumController = AlbumController = __decorate([
    (0, common_1.Controller)('album'),
    __metadata("design:paramtypes", [album_service_1.AlbumService,
        artista_service_1.ArtistaService,
        cancion_service_1.CancionService,
        genero_service_1.GeneroService])
], AlbumController);
//# sourceMappingURL=album.controller.js.map