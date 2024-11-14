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
exports.CancionController = void 0;
const common_1 = require("@nestjs/common");
const cancion_service_1 = require("./cancion.service");
const cancion_dto_1 = require("./cancion.dto");
let CancionController = class CancionController {
    constructor(cancionService) {
        this.cancionService = cancionService;
    }
    findAll() {
        return this.cancionService.findAll();
    }
    findOne(id) {
        return this.cancionService.findOne(+id);
    }
    findByAlbum(albumId) {
        return this.cancionService.findByAlbum(+albumId);
    }
    create(createCancionDto) {
        return this.cancionService.create(createCancionDto);
    }
    update(id, updateCancionDto) {
        return this.cancionService.update(+id, updateCancionDto);
    }
    remove(id) {
        return this.cancionService.remove(+id);
    }
};
exports.CancionController = CancionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CancionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('album/:albumId'),
    __param(0, (0, common_1.Param)('albumId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionController.prototype, "findByAlbum", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cancion_dto_1.CreateCancionDto]),
    __metadata("design:returntype", void 0)
], CancionController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cancion_dto_1.CreateCancionDto]),
    __metadata("design:returntype", void 0)
], CancionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionController.prototype, "remove", null);
exports.CancionController = CancionController = __decorate([
    (0, common_1.Controller)('cancion'),
    __metadata("design:paramtypes", [cancion_service_1.CancionService])
], CancionController);
//# sourceMappingURL=cancion.controller.js.map