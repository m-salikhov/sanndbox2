import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto } from './DTO/user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  @Query(() => User)
  getOneUser(@Args('id') id: string): Promise<User> {
    return this.usersService.getOneUser(id);
  }

  @Mutation(() => User)
  createUser(@Args('userDto') userDto: UserDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }
}
