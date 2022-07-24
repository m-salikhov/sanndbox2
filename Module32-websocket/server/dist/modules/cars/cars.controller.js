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
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const cars_service_1 = require("./cars.service");
const car_dto_1 = require("./dto/car.dto");
const find_car_dto_1 = require("./dto/find-car.dto");
const car_entity_1 = require("./entities/car.entity");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    findAll() {
        return this.carsService.findAll();
    }
    createNewCar(createCarDto) {
        return this.carsService.createCar(createCarDto);
    }
    getOne(id) {
        return this.carsService.getOne(id);
    }
    getSomeCars(findCarsDto) {
        return this.carsService.getSomeCars(findCarsDto);
    }
    updateCar(id, updateCarDto) {
        return this.carsService.updateCar(id, updateCarDto);
    }
};
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOkResponse({
        description: 'Get All Cars succesfully',
        type: [car_entity_1.Car],
    }),
    swagger_1.ApiInternalServerErrorResponse({
        description: 'Iternal server error',
    }),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/car.entity").Car] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOkResponse({
        description: 'Post Car succesfully',
        type: car_entity_1.Car,
    }),
    common_1.Post(),
    swagger_1.ApiBody({ type: car_dto_1.CarDto }),
    openapi.ApiResponse({ status: 201, type: require("./entities/car.entity").Car }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dto_1.CarDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "createNewCar", null);
__decorate([
    swagger_1.ApiOkResponse({
        description: 'Get Car succesfully',
        type: car_entity_1.Car,
    }),
    swagger_1.ApiInternalServerErrorResponse({
        description: 'Iternal server error',
    }),
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/car.entity").Car }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getOne", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOkResponse({
        description: 'Get some cars succesfully',
        type: [car_entity_1.Car],
    }),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('/somecars'),
    openapi.ApiResponse({ status: 201, type: [require("./entities/car.entity").Car] }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_car_dto_1.FindCarsDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getSomeCars", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, car_dto_1.CarDto]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "updateCar", null);
CarsController = __decorate([
    swagger_1.ApiTags('cars'),
    common_1.Controller('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map