import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';
// import { User } from './interface/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAllUsers(): Promise<UserDto[]> {
    return this.usersService.findAllUsers();
  }

  @Post()
  createNewUser(@Body() createUserDto: UserDto): Promise<UserDto> {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.usersService.getOne(params.id);
  }
}
