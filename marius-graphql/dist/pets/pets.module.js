"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsModule = void 0;
const common_1 = require("@nestjs/common");
const owners_module_1 = require("../owners/owners.module");
const pet_repo_1 = require("../repository/pet.repo");
const pets_resolver_1 = require("./pets.resolver");
const pets_service_1 = require("./pets.service");
let PetsModule = class PetsModule {
};
PetsModule = __decorate([
    common_1.Module({
        imports: [owners_module_1.OwnersModule],
        providers: [pets_resolver_1.PetsResolver, pets_service_1.PetsService, pet_repo_1.PetsRepo],
    })
], PetsModule);
exports.PetsModule = PetsModule;
//# sourceMappingURL=pets.module.js.map