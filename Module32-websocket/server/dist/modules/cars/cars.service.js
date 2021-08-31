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
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const cars_repo_1 = require("./repo/cars.repo");
let CarsService = class CarsService {
    constructor(carsRepo) {
        this.carsRepo = carsRepo;
    }
    async createCar(car) {
        return await this.carsRepo.createCar(car);
    }
    async findAll() {
        return await this.carsRepo.getAll();
    }
    async getOne(id) {
        return await this.carsRepo.getOne(id);
    }
    async getSomeCars(findCarsDto) {
        return await this.carsRepo.getSomeCars(findCarsDto);
    }
};
CarsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cars_repo_1.CarsRepo])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map