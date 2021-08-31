import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findOne(options?: FindOneOptions<UserEntity>): Promise<UserDto>;
    findAll(options?: FindManyOptions<UserEntity>): Promise<UserDto[]>;
    findByLogin({ username, password }: LoginUserDto): Promise<UserDto>;
    findByPayload({ username }: any): Promise<UserDto>;
    create(createUserDto: CreateUserDto): Promise<UserDto>;
}
