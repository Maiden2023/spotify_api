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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artista = void 0;
const typeorm_1 = require("typeorm");
const genero_entity_1 = require("../genero/genero.entity");
const album_entity_1 = require("../album/album.entity");
let Artista = class Artista {
};
exports.Artista = Artista;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Artista.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Artista.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Artista.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => genero_entity_1.Genero, (genero) => genero.artistas, { eager: true }),
    __metadata("design:type", genero_entity_1.Genero)
], Artista.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => album_entity_1.Album, (album) => album.artista),
    __metadata("design:type", Array)
], Artista.prototype, "albums", void 0);
exports.Artista = Artista = __decorate([
    (0, typeorm_1.Entity)()
], Artista);
//# sourceMappingURL=artista.entity.js.map