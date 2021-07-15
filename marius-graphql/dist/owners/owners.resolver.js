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
exports.OwnersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const owners_service_1 = require("./owners.service");
const owner_entity_1 = require("./entities/owner.entity");
const create_owner_input_1 = require("./dto/create-owner.input");
let OwnersResolver = class OwnersResolver {
    constructor(ownersService) {
        this.ownersService = ownersService;
    }
    createOwner(createOwnerInput) {
        return this.ownersService.create(createOwnerInput);
    }
    findAll() {
        return this.ownersService.findAll();
    }
    getOneOwner(id) {
        return this.ownersService.findOne(id);
    }
};
__decorate([
    graphql_1.Mutation(() => owner_entity_1.Owner),
    __param(0, graphql_1.Args('createOwnerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_owner_input_1.CreateOwnerInput]),
    __metadata("design:returntype", void 0)
], OwnersResolver.prototype, "createOwner", null);
__decorate([
    graphql_1.Query(() => [owner_entity_1.Owner], { name: 'owners' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OwnersResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => owner_entity_1.Owner),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OwnersResolver.prototype, "getOneOwner", null);
OwnersResolver = __decorate([
    graphql_1.Resolver(() => owner_entity_1.Owner),
    __metadata("design:paramtypes", [owners_service_1.OwnersService])
], OwnersResolver);
exports.OwnersResolver = OwnersResolver;
//# sourceMappingURL=owners.resolver.js.map