import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'jdfdbvfdkdjgdf',
		});
	}

	async validate(payload: JwtPayload): Promise<UserDto> {
		const user = await this.authService.validateUser(payload);
		if (!user) {
			throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
		}
		return user;
	}
}
