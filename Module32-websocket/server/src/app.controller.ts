import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './modules/auth/auth.service';
import { LocalAuthGuard } from './modules/auth/local-auth.guard';
import { UserVKDto } from './modules/users/DTO/userVK.dto';
import { UsersService } from './modules/users/users.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @Post('loginVK')
  async loginVK(@Body() userVK: UserVKDto): Promise<any> {
    console.log(userVK);
    const user = await this.usersService.loginUserVK(userVK);
    return this.authService.loginVK(user);
  }
}
