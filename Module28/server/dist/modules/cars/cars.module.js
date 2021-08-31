"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const cars_controller_1 = require("./cars.controller");
const cars_service_1 = require("./cars.service");
const cars_repo_1 = require("./repo/cars.repo");
let CarsModule = class CarsModule {
};
CarsModule = __decorate([
    common_1.Module({
        imports: [auth_module_1.AuthModule],
        controllers: [cars_controller_1.CarsController],
        providers: [cars_service_1.CarsService, cars_repo_1.CarsRepo],
    })
], CarsModule);
exports.CarsModule = CarsModule;
//# sourceMappingURL=cars.module.js.map