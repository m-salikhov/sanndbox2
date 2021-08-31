"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsRepo = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const car_entity_1 = require("../entities/car.entity");
let CarsRepo = class CarsRepo {
    async createCar(carDto) {
        const repository = typeorm_1.getMongoRepository(car_entity_1.Car);
        const newCar = Object.assign(Object.assign({}, carDto), { _id: uuid_1.v4() });
        return await repository.save(newCar);
    }
    async getAll() {
        const repository = typeorm_1.getMongoRepository(car_entity_1.Car);
        return await repository.find();
    }
    async getOne(id) {
        const repository = typeorm_1.getMongoRepository(car_entity_1.Car);
        return await repository.findOne({ _id: id });
    }
    async getSomeCars(findCars) {
        const repository = typeorm_1.getMongoRepository(car_entity_1.Car);
        return await repository.find({
            where: {
                city: { $eq: findCars.city },
                type: { $eq: findCars.type },
            },
        });
    }
};
CarsRepo = __decorate([
    common_1.Injectable()
], CarsRepo);
exports.CarsRepo = CarsRepo;
//# sourceMappingURL=cars.repo.js.map