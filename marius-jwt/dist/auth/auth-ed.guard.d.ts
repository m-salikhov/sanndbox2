import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthedGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<any>;
}
