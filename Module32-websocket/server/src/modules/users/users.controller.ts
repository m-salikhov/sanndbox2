import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';
// import { UserVKDto } from './DTO/userVK.dto';
import { User } from './entities/user.entity';
// import { UserVK } from './entities/userVK.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Post()
  createUser(@Body() user: UserDto): Promise<User> {
    return this.usersService.createUser(user);
  }

  // @Post('/loginVK')
  // loginVK(@Body() userVK: UserVKDto): Promise<UserVK> {
  //   return this.usersService.loginUserVK(userVK);
  // }

  @Get(':id')
  getOneUser(@Param() params) {
    return this.usersService.getOneUser(params.id);
  }

  @Get('user/:email')
  getByEmail(@Param() params) {
    return this.usersService.getOneByEmail(params.email);
  }
}
