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
exports.UserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String, minLength: 5 }, bdayDate: { required: true, type: () => String }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, passport: { required: true, type: () => String }, passDate: { required: true, type: () => String }, passOrg: { required: true, type: () => String }, passOrgCode: { required: true, type: () => String }, licenseNumber: { required: true, type: () => String }, dateLicense: { required: true, type: () => String }, pass: { required: true, type: () => String }, cardNumber: { required: false, type: () => String }, cardName: { required: false, type: () => String }, cardExpiry: { required: false, type: () => String }, cardCvc: { required: false, type: () => String }, _id: { required: false, type: () => String } };
    }
}
__decorate([
    class_validator_1.MinLength(5, {
        message: 'username is too short',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "bdayDate", void 0);
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "passport", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "passDate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "passOrg", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "passOrgCode", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "licenseNumber", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "dateLicense", void 0);
__decorate([
    class_validator_1.Length(5, 15),
    __metadata("design:type", String)
], UserDto.prototype, "pass", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map