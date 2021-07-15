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
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const keys_1 = require("./config/keys");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const pets_module_1 = require("./pets/pets.module");
const pet_entity_1 = require("./pets/Entities/pet.entity");
const owners_module_1 = require("./owners/owners.module");
const owner_entity_1 = require("./owners/entities/owner.entity");
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
                entities: [pet_entity_1.Pet, owner_entity_1.Owner],
                useUnifiedTopology: true,
            }),
            pets_module_1.PetsModule,
            owners_module_1.OwnersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map