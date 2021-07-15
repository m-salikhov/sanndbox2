"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnersModule = void 0;
const common_1 = require("@nestjs/common");
const owners_service_1 = require("./owners.service");
const owners_resolver_1 = require("./owners.resolver");
const owner_repo_1 = require("../repository/owner.repo");
let OwnersModule = class OwnersModule {
};
OwnersModule = __decorate([
    common_1.Module({
        providers: [owners_resolver_1.OwnersResolver, owners_service_1.OwnersService, owner_repo_1.OwnersRepo],
        exports: [owners_service_1.OwnersService, owner_repo_1.OwnersRepo],
    })
], OwnersModule);
exports.OwnersModule = OwnersModule;
//# sourceMappingURL=owners.module.js.map