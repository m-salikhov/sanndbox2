import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthedGuard } from './auth/auth-ed.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private auth: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getStartHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): any {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req): any {
    //@Req alias for @Request
    return this.auth.login(req.user);
  }
}
