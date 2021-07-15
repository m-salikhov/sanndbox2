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
exports.PetsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const pets_service_1 = require("./pets.service");
const pet_entity_1 = require("./Entities/pet.entity");
const create_pet_input_1 = require("./dto/create-pet-input");
const owner_entity_1 = require("../owners/entities/owner.entity");
let PetsResolver = class PetsResolver {
    constructor(petServise) {
        this.petServise = petServise;
    }
    pets() {
        return this.petServise.getAll();
    }
    getOnePet(id) {
        return this.petServise.getOne(id);
    }
    owner(pet) {
        return this.petServise.getOwner(pet.ownerID);
    }
    createPet(createPetInput) {
        return this.petServise.createPet(createPetInput);
    }
};
__decorate([
    graphql_1.Query((returns) => [pet_entity_1.Pet]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PetsResolver.prototype, "pets", null);
__decorate([
    graphql_1.Query((returns) => pet_entity_1.Pet),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PetsResolver.prototype, "getOnePet", null);
__decorate([
    graphql_1.ResolveField((returns) => owner_entity_1.Owner),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pet_entity_1.Pet]),
    __metadata("design:returntype", Promise)
], PetsResolver.prototype, "owner", null);
__decorate([
    graphql_1.Mutation((returns) => pet_entity_1.Pet),
    __param(0, graphql_1.Args('createPetInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_input_1.CreatePetInput]),
    __metadata("design:returntype", void 0)
], PetsResolver.prototype, "createPet", null);
PetsResolver = __decorate([
    graphql_1.Resolver((of) => pet_entity_1.Pet),
    __metadata("design:paramtypes", [pets_service_1.PetsService])
], PetsResolver);
exports.PetsResolver = PetsResolver;
//# sourceMappingURL=pets.resolver.js.map