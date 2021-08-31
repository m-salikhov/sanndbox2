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
exports.CarsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cars_service_1 = require("./cars.service");
const car_dto_1 = require("./dto/car.dto");
const find_car_dto_1 = require("./dto/find-car.dto");
const car_entity_1 = require("./entities/car.entity");
let CarsResolver = class CarsResolver {
    constructor(carsService) {
        this.carsService = carsService;
    }
    cars() {
        return this.carsService.getAll();
    }
    someCars(findCarsDto) {
        return this.carsService.getSomeCars(findCarsDto);
    }
    getOneCar(id) {
        return this.carsService.getOne(id);
    }
    createCar(carDto) {
        return this.carsService.createCar(carDto);
    }
};
__decorate([
    graphql_1.Query(() => [car_entity_1.Car]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsResolver.prototype, "cars", null);
__decorate([
    graphql_1.Query(() => [car_entity_1.Car]),
    __param(0, graphql_1.Args('findCarsDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_car_dto_1.FindCarsDto]),
    __metadata("design:returntype", Promise)
], CarsResolver.prototype, "someCars", null);
__decorate([
    graphql_1.Query(() => car_entity_1.Car),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsResolver.prototype, "getOneCar", null);
__decorate([
    graphql_1.Mutation(() => car_entity_1.Car),
    __param(0, graphql_1.Args('carDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dto_1.CarDto]),
    __metadata("design:returntype", void 0)
], CarsResolver.prototype, "createCar", null);
CarsResolver = __decorate([
    graphql_1.Resolver(() => car_entity_1.Car),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsResolver);
exports.CarsResolver = CarsResolver;
//# sourceMappingURL=cars.resolver.js.map