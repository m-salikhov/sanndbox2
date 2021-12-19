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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./modules/auth/auth.service");
const local_auth_guard_1 = require("./modules/auth/local-auth.guard");
const userVK_dto_1 = require("./modules/users/DTO/userVK.dto");
const users_service_1 = require("./modules/users/users.service");
let AppController = class AppController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async login(req) {
        return this.authService.login(req.user);
    }
    async loginVK(userVK) {
        console.log(userVK);
        const user = await this.usersService.loginUserVK(userVK);
        return this.authService.loginVK(user);
    }
};
__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('login'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    common_1.Post('loginVK'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userVK_dto_1.UserVKDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "loginVK", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map