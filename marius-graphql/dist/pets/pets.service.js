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
exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const owner_entity_1 = require("../owners/entities/owner.entity");
const owners_service_1 = require("../owners/owners.service");
const pet_repo_1 = require("../repository/pet.repo");
let PetsService = class PetsService {
    constructor(petsRepo, ownerService) {
        this.petsRepo = petsRepo;
        this.ownerService = ownerService;
    }
    async createPet(createPetInput) {
        return await this.petsRepo.createPet(createPetInput);
    }
    async getAll() {
        return await this.petsRepo.getAll();
    }
    async getOne(id) {
        return this.petsRepo.getOne(id);
    }
    getOwner(ownerID) {
        return this.ownerService.findOne(ownerID);
    }
};
PetsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [pet_repo_1.PetsRepo,
        owners_service_1.OwnersService])
], PetsService);
exports.PetsService = PetsService;
//# sourceMappingURL=pets.service.js.map