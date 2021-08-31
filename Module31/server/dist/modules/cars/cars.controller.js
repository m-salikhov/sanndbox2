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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
const car_dto_1 = require("./dto/car.dto");
const find_car_dto_1 = require("./dto/find-car.dto");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    findAll() {
        return this.carsService.findAll();
    }
    createNewUser(createCarDto) {
        return this.carsService.createCar(createCarDto);
    }
    getOne(params) {
        return this.carsService.getOne(params.id);
    }
    getSomeCars(findCarsDto) {
        return this.carsService.getSomeCars(findCarsDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dto_1.CarDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "createNewUser", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getOne", null);
__decorate([
    common_1.Post('/somecars'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_car_dto_1.FindCarsDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getSomeCars", null);
CarsController = __decorate([
    common_1.Controller('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map