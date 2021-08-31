"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthedGuard = void 0;
class AuthedGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return request.isAuthenticated();
    }
}
exports.AuthedGuard = AuthedGuard;
//# sourceMappingURL=auth-ed.guard.js.map