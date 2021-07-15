"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const keys_1 = require("./config/keys");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(keys_1.default.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map