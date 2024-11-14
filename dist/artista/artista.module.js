"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artista_entity_1 = require("./artista.entity");
const artista_service_1 = require("./artista.service");
const artista_controller_1 = require("./artista.controller");
const genero_module_1 = require("../genero/genero.module");
let ArtistaModule = class ArtistaModule {
};
exports.ArtistaModule = ArtistaModule;
exports.ArtistaModule = ArtistaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([artista_entity_1.Artista]),
            genero_module_1.GeneroModule],
        providers: [artista_service_1.ArtistaService],
        controllers: [artista_controller_1.ArtistaController],
        exports: [artista_service_1.ArtistaService, typeorm_1.TypeOrmModule],
    })
], ArtistaModule);
//# sourceMappingURL=artista.module.js.map