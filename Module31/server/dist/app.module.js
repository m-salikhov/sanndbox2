"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./modules/users/users.module");
const cars_module_1 = require("./modules/cars/cars.module");
const keys_1 = require("./config/keys");
const path_1 = require("path");
const graphql_1 = require("@nestjs/graphql");
const owners_module_1 = require("./modules/owners/owners.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: path_1.join(process.cwd(), 'src/schema.gql'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                name: 'default',
                type: 'mongodb',
                url: keys_1.default.mongoURI,
                entities: [`${__dirname}/**/*.entity.{js,ts}`],
                useUnifiedTopology: true,
            }),
            users_module_1.UsersModule,
            cars_module_1.CarsModule,
            owners_module_1.OwnersModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map