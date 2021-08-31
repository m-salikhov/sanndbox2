"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    mongouri: process.env.MONGO_URI,
    secret: process.env.SECRET,
});
//# sourceMappingURL=configuration.js.map