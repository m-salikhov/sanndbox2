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
exports.MessagesRepo = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const message_entity_1 = require("../entities/message.entity");
const uuid_1 = require("uuid");
const users_service_1 = require("../../users/users.service");
let MessagesRepo = class MessagesRepo {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getAll() {
        const repository = typeorm_1.getMongoRepository(message_entity_1.Message);
        return await repository.find();
    }
    async createMessage(message, user) {
        const repository = typeorm_1.getMongoRepository(message_entity_1.Message);
        const toUserFool = (await this.usersService.getOneUser(message.toUserId)) ||
            (await this.usersService.getOneUserVK(message.toUserId));
        if (!toUserFool) {
            throw new common_1.HttpException(`User not found`, common_1.HttpStatus.NOT_FOUND);
        }
        const toUser = {
            _id: toUserFool._id,
            username: toUserFool.username,
        };
        const newMessage = await repository.create({
            _id: uuid_1.v4(),
            user,
            toUser,
            body: message.body,
        });
        return await repository.save(newMessage);
    }
    async getAllMessagesById(user) {
        const repository = typeorm_1.getMongoRepository(message_entity_1.Message);
        return await repository.find({
            where: {
                $or: [
                    { 'user._id': { $eq: user._id } },
                    { 'toUser._id': { $eq: user._id } },
                ],
            },
        });
    }
    async deleteAll() {
        const repository = typeorm_1.getMongoRepository(message_entity_1.Message);
        await repository.deleteMany({
            'user.username': {
                $in: ['Kolya', 'Olya', 'Ivan', 'Thomas Andersen', 'Максим Салихов'],
            },
        });
        return { msg: 'Сообщения удалены' };
    }
};
MessagesRepo = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], MessagesRepo);
exports.MessagesRepo = MessagesRepo;
//# sourceMappingURL=message.repo.js.map