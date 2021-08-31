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
let UsersRepo = class UsersRepo {
    async createUser(userDto) {
        const repository = typeorm_1.getMongoRepository(user_entity_1.User);
        const saltOrRounds = 10;
        const password = userDto.pass;
        const hash = await bcrypt.hash(password, saltOrRounds);
        const newUser = Object.assign(Object.assign({}, userDto), { _id: uuid_1.v4(), pass: hash });
        return await repository.save(newUser);
    }
    async getAllUsers() {
        const repository = typeorm_1.getMongoRepository(user_entity_1.User);
        return await repository.find();
    }
    async getOneUser(id) {
        const repository = typeorm_1.getMongoRepository(user_entity_1.User);
        return await repository.findOne({ _id: id });
    }
};
UsersRepo = __decorate([
    common_1.Injectable()
], UsersRepo);
exports.UsersRepo = UsersRepo;
//# sourceMappingURL=users.repo.js.map