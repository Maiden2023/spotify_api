"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const album_module_1 = require("./album/album.module");
const artista_module_1 = require("./artista/artista.module");
const genero_module_1 = require("./genero/genero.module");
const cancion_module_1 = require("./cancion/cancion.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const genero_entity_1 = require("./genero/genero.entity");
const artista_entity_1 = require("./artista/artista.entity");
const album_entity_1 = require("./album/album.entity");
const cancion_entity_1 = require("./cancion/cancion.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'spotify',
                entities: [genero_entity_1.Genero, artista_entity_1.Artista, album_entity_1.Album, cancion_entity_1.Cancion],
                synchronize: true,
            }),
            album_module_1.AlbumModule,
            artista_module_1.ArtistaModule,
            genero_module_1.GeneroModule,
            cancion_module_1.CancionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map