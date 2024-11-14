"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const album_service_1 = require("./album.service");
const album_controller_1 = require("./album.controller");
const album_entity_1 = require("./album.entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const genero_entity_1 = require("../genero/genero.entity");
const artista_module_1 = require("../artista/artista.module");
const cancion_module_1 = require("../cancion/cancion.module");
const genero_module_1 = require("../genero/genero.module");
let AlbumModule = class AlbumModule {
};
exports.AlbumModule = AlbumModule;
exports.AlbumModule = AlbumModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([album_entity_1.Album, cancion_entity_1.Cancion, genero_entity_1.Genero]),
            artista_module_1.ArtistaModule,
            cancion_module_1.CancionModule,
            genero_module_1.GeneroModule,
        ],
        providers: [album_service_1.AlbumService],
        controllers: [album_controller_1.AlbumController],
    })
], AlbumModule);
//# sourceMappingURL=album.module.js.map