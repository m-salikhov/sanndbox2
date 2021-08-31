import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  @Post()
  createNewUser(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }

  @Get(':id')
  getOneUser(@Param() params) {
    return this.usersService.getOneUser(params.id);
  }

  @Get('user/:email')
  getByEmail(@Param() params) {
    return this.usersService.getOneByEmail(params.email);
  }
}
