"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessangesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const messages_gateway_1 = require("../../messages/messages.gateway");
const users_repo_1 = require("../users/repo/users.repo");
const users_service_1 = require("../users/users.service");
const message_entity_1 = require("./entities/message.entity");
const messanges_controller_1 = require("./messanges.controller");
const messanges_service_1 = require("./messanges.service");
const message_repo_1 = require("./repo/message.repo");
let MessangesModule = class MessangesModule {
};
MessangesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([message_entity_1.Message])],
        controllers: [messanges_controller_1.MessangesController],
        providers: [
            messanges_service_1.MessangesService,
            message_repo_1.MessagesRepo,
            users_service_1.UsersService,
            users_repo_1.UsersRepo,
            messages_gateway_1.MessagesGateway,
        ],
    })
], MessangesModule);
exports.MessangesModule = MessangesModule;
//# sourceMappingURL=messanges.module.js.map