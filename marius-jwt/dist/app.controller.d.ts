import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly appService;
    private auth;
    constructor(appService: AppService, auth: AuthService);
    getStartHello(): string;
    getHello(req: any): any;
    login(req: any): any;
}
