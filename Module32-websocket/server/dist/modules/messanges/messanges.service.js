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
exports.MessangesService = void 0;
const common_1 = require("@nestjs/common");
const message_repo_1 = require("./repo/message.repo");
let MessangesService = class MessangesService {
    constructor(messagesRepo) {
        this.messagesRepo = messagesRepo;
    }
    attachSender(sender) {
        this.push = sender;
    }
    async findAll() {
        return await this.messagesRepo.getAll();
    }
    async createMessage(createMessageDto, user) {
        return await this.messagesRepo.createMessage(createMessageDto, user);
    }
    async messagesById(user) {
        return await this.messagesRepo.getAllMessagesById(user);
    }
    async deleteAll() {
        return await this.messagesRepo.deleteAll();
    }
};
MessangesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [message_repo_1.MessagesRepo])
], MessangesService);
exports.MessangesService = MessangesService;
//# sourceMappingURL=messanges.service.js.map