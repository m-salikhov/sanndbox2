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
exports.PaymentsController = void 0;
const openapi = require("@nestjs/swagger");
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const users_service_1 = require("../users/users.service");
const createPayment_dto_1 = require("./dto/createPayment.dto");
const rxjs_1 = require("rxjs");
let PaymentsController = class PaymentsController {
    constructor(usersService, http) {
        this.usersService = usersService;
        this.http = http;
    }
    async sessionKey() {
        const pyamentGatewayRawResponse = this.http.post(`${process.env.PAYMENT_SERVER}/transfers`, {
            to: 'fe51a66c-05f0-49ef-afb9-e65f18a90d8a',
            amount: 100,
            from: '6746a6d3-8824-4c84-a295-bb6eedb22bf8',
            cardNumber: '0000-0000-0000-0000',
            cardName: 'Max',
            cardExpiry: '10.10.2030',
            cardCvc: '777',
        }, {
            headers: {
                authorization: `Bearer ${process.env.BANK_SECRET_KEY}`,
            },
        });
        const dataPaymentResponse = await rxjs_1.firstValueFrom(pyamentGatewayRawResponse);
        return dataPaymentResponse.data;
    }
    async create({ amount, toUserId }, req) {
        const user = req.user;
        const currentUser = Object.assign({ cardName: 'Tom York', cardNumber: '0000-0000-0000-0000', cardExpiry: '10.10.2030', cardCvc: '777' }, user);
        const toUser = await this.usersService.getOneUser(toUserId);
        const pyamentGatewayRawResponse = this.http.post(`${process.env.PAYMENT_SERVER}/transfers`, {
            to: toUser._id,
            amount: Number(amount),
            from: currentUser._id,
            cardNumber: currentUser.cardNumber,
            cardName: currentUser.cardName,
            cardExpiry: currentUser.cardExpiry,
            cardCvc: currentUser.cardCvc,
        }, {
            headers: {
                authorization: `Bearer ${process.env.BANK_SECRET_KEY}`,
            },
        });
        const paymentData = await rxjs_1.firstValueFrom(pyamentGatewayRawResponse);
        const paymentSessionKey = paymentData.data.paymentSessionKey;
        return {
            paymentSessionKey,
            currentUser,
            toUser,
        };
    }
    async checkPaymentStatus(paymentSessionKey) {
        if (!paymentSessionKey) {
            throw new common_1.HttpException('paymentSessionKey not found', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        const checkPaymentStatusFullRespose = this.http.get(`${process.env.PAYMENT_SERVER}/transfers/check-status`, {
            headers: {
                authorization: `Bearer ${process.env.BANK_SECRET_KEY}`,
            },
            params: {
                paymentSessionKey,
            },
        });
        const checkPaymentStatusResponse = await rxjs_1.firstValueFrom(checkPaymentStatusFullRespose);
        const paymentStatus = checkPaymentStatusResponse.data.transferStatus;
        console.log(paymentStatus);
        return { paymentStatus };
    }
};
__decorate([
    common_1.Get('test'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "sessionKey", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPayment_dto_1.CreatePaymentDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "create", null);
__decorate([
    common_1.Get('check-status'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Query('paymentSessionKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "checkPaymentStatus", null);
PaymentsController = __decorate([
    common_1.Controller('payments'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        axios_1.HttpService])
], PaymentsController);
exports.PaymentsController = PaymentsController;
//# sourceMappingURL=payments.controller.js.map