"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnersRepo = void 0;
const common_1 = require("@nestjs/common");
const create_owner_input_1 = require("../owners/dto/create-owner.input");
const owner_entity_1 = require("../owners/entities/owner.entity");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let OwnersRepo = class OwnersRepo {
    async createOwner(createOwnerInput) {
        const repository = typeorm_1.getMongoRepository(owner_entity_1.Owner);
        const newOwner = Object.assign(Object.assign({}, createOwnerInput), { _id: uuid_1.v4() });
        return await repository.save(newOwner);
    }
    async getAll() {
        const repository = typeorm_1.getMongoRepository(owner_entity_1.Owner);
        return await repository.find();
    }
    async findOne(id) {
        const repository = typeorm_1.getMongoRepository(owner_entity_1.Owner);
        return await repository.findOne({ _id: id });
    }
};
OwnersRepo = __decorate([
    common_1.Injectable()
], OwnersRepo);
exports.OwnersRepo = OwnersRepo;
//# sourceMappingURL=owner.repo.js.map