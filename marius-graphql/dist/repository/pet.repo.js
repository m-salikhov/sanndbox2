"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsRepo = void 0;
const common_1 = require("@nestjs/common");
const create_pet_input_1 = require("../pets/dto/create-pet-input");
const pet_entity_1 = require("../pets/Entities/pet.entity");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let PetsRepo = class PetsRepo {
    async createPet(createPetInput) {
        const repository = typeorm_1.getMongoRepository(pet_entity_1.Pet);
        const newPet = Object.assign(Object.assign({}, createPetInput), { _id: uuid_1.v4() });
        return await repository.save(newPet);
    }
    async getAll() {
        const repository = typeorm_1.getMongoRepository(pet_entity_1.Pet);
        return await repository.find();
    }
    async getOne(id) {
        const repository = typeorm_1.getMongoRepository(pet_entity_1.Pet);
        return await repository.findOne({ _id: id });
    }
};
PetsRepo = __decorate([
    common_1.Injectable()
], PetsRepo);
exports.PetsRepo = PetsRepo;
//# sourceMappingURL=pet.repo.js.map