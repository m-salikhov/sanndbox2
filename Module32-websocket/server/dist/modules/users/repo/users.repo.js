"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepo = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
const userVK_entity_1 = require("../entities/userVK.entity");
let UsersRepo = class UsersRepo {
    async createUser(user) {
        const repository = typeorm_1.getMongoRepository(user_entity_1.User);
        const userCheck = await repository.findOne({ email: user.email });
        if (userCheck)
            throw new common_1.ConflictException('Email уже существует в системе');
        const password = user.pass;
        const hash = await bcrypt.hash(password, 10);
        const newUser = Object.assign(Object.assign({ _id: uuid_1.v4() }, user), { pass: hash });
        return await repository.save(newUser);
    }
    async loginUserVK(userVK) {
        const repository = typeorm_1.getMongoRepository(userVK_entity_1.UserVK);
        const user = await repository.findOne({ uid: userVK.uid });
        if (user)
            return user;
        const newUserVK = Object.assign({ _id: uuid_1.v4() }, userVK);
        return await repository.save(newUserVK);
    }
    async getAllUsers() {
        const repository = typeorm_1.getMongoRepository(user_entity_1.User);
        return await repository.find();
    }
    async getOneUser(id) {
        const repository = typeorm_1.getMongoRepository(user_entity_1.User);
        return await repository.findOne({ _id: id });
    }
    async getOneUserVK(id) {
        const repository = typeorm_1.getMongoRepository(userVK_entity_1.UserVK);
        return await repository.findOne({ _id: id });
    }
    async getOneByEmail(email) {
        const repository = typeorm_1.getMongoRepository(user_entity_1.User);
        const user = await repository.findOne({ email });
        if (!user)
            throw new common_1.UnauthorizedException();
        return user;
    }
};
UsersRepo = __decorate([
    common_1.Injectable()
], UsersRepo);
exports.UsersRepo = UsersRepo;
//# sourceMappingURL=users.repo.js.map