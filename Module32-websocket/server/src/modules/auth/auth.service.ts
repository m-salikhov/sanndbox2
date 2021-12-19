import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserVKDto } from '../users/DTO/userVK.dto';
import { UserVK } from '../users/entities/userVK.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getOneByEmail(email);
    const isMatch = await bcrypt.compare(pass, user.pass);

    if (user && isMatch) {
      const rest = { id: user._id, username: user.username };
      return rest;
    }

    return null;
  }

  async login(user: any) {
    console.log(user);
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      payload,
    };
  }
  async loginVK(userVK: UserVK) {
    console.log(userVK);
    const payload = { username: userVK.username, sub: userVK._id };
    return {
      access_token: this.jwtService.sign(payload),
      payload,
    };
  }
}
