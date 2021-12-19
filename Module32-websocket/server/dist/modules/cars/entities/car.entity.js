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
exports.Car = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Car = class Car {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, brand: { required: true, type: () => String }, model: { required: true, type: () => String }, type: { required: true, type: () => String }, number: { required: true, type: () => String }, price: { required: true, type: () => Number }, city: { required: true, type: () => String }, photo: { required: true, type: () => String }, bookedInfo: { required: true, type: () => ({ booked: { required: true, type: () => Boolean }, date: { required: true, type: () => ({ startDate: { required: true, type: () => String }, endDate: { required: true, type: () => String } }) } }) } };
    }
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Car.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "brand", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "model", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "number", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Car.prototype, "price", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "city", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "photo", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Object)
], Car.prototype, "bookedInfo", void 0);
Car = __decorate([
    typeorm_1.Entity()
], Car);
exports.Car = Car;
//# sourceMappingURL=car.entity.js.map