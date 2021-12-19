"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsModule = void 0;
const common_1 = require("@nestjs/common");
const payments_controller_1 = require("./payments.controller");
const users_service_1 = require("../users/users.service");
const users_repo_1 = require("../users/repo/users.repo");
const axios_1 = require("@nestjs/axios");
let PaymentsModule = class PaymentsModule {
};
PaymentsModule = __decorate([
    common_1.Module({
        controllers: [payments_controller_1.PaymentsController],
        imports: [axios_1.HttpModule],
        providers: [users_service_1.UsersService, users_repo_1.UsersRepo],
    })
], PaymentsModule);
exports.PaymentsModule = PaymentsModule;
//# sourceMappingURL=payments.module.js.map