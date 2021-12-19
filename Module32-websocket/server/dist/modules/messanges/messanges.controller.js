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
exports.MessangesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_message_dto_1 = require("./dto/create-message.dto");
const messanges_service_1 = require("./messanges.service");
let MessangesController = class MessangesController {
    constructor(messangesService) {
        this.messangesService = messangesService;
    }
    messages() {
        return this.messangesService.findAll();
    }
    async createMessage(createMessageDto, req) {
        const message = await this.messangesService.createMessage(createMessageDto, req.user);
        this.messangesService.push(message);
        return message;
    }
    messagesById(req) {
        return this.messangesService.messagesById(req.user);
    }
    deleteAll() {
        return this.messangesService.deleteAll();
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessangesController.prototype, "messages", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto, Object]),
    __metadata("design:returntype", Promise)
], MessangesController.prototype, "createMessage", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('/messagesById'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessangesController.prototype, "messagesById", null);
__decorate([
    common_1.Delete(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessangesController.prototype, "deleteAll", null);
MessangesController = __decorate([
    common_1.Controller('messages'),
    __metadata("design:paramtypes", [messanges_service_1.MessangesService])
], MessangesController);
exports.MessangesController = MessangesController;
//# sourceMappingURL=messanges.controller.js.map