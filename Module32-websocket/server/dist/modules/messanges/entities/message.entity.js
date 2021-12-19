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
exports.Message = void 0;
const typeorm_1 = require("typeorm");
let Message = class Message {
    constructor() {
        this.createdAt = Date.now();
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Message.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Object)
], Message.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Object)
], Message.prototype, "toUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Message.prototype, "body", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Message.prototype, "createdAt", void 0);
Message = __decorate([
    typeorm_1.Entity()
], Message);
exports.Message = Message;
//# sourceMappingURL=message.entity.js.map