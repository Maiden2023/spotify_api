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
exports.Album = void 0;
const typeorm_1 = require("typeorm");
const artista_entity_1 = require("../artista/artista.entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
let Album = class Album {
};
exports.Album = Album;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Album.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Album.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Album.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artista_entity_1.Artista, (artista) => artista.albums),
    __metadata("design:type", artista_entity_1.Artista)
], Album.prototype, "artista", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cancion_entity_1.Cancion, (cancion) => cancion.album),
    __metadata("design:type", Array)
], Album.prototype, "canciones", void 0);
exports.Album = Album = __decorate([
    (0, typeorm_1.Entity)()
], Album);
//# sourceMappingURL=album.entity.js.map