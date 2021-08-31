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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_dto_1 = require("../users/dto/user.dto");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const message_entity_1 = require("./entity/message.entity");
let MessagesService = class MessagesService {
    constructor(messageRepository, usersService) {
        this.messageRepository = messageRepository;
        this.usersService = usersService;
    }
    findAll(options) {
        return this.messageRepository.find(Object.assign({ relations: ['user', 'toUser'] }, options));
    }
    async create(user, createMessageDto) {
        const toUser = await this.usersService.findOne({
            where: { id: createMessageDto.toUserId },
        });
        if (!toUser) {
            throw new common_1.HttpException(`User ${createMessageDto.toUserId} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        try {
            const message = this.messageRepository.create({
                user,
                toUser,
                body: createMessageDto.body,
            });
            return await this.messageRepository.save(message);
        }
        catch (error) {
            switch (error.code) {
                case 'SQLITE_CONSTRAINT':
                    throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
                default:
                    throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_IMPLEMENTED);
            }
        }
    }
};
MessagesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(message_entity_1.MessageEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map