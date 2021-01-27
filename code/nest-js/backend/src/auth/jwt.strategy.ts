import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JWT_SECRET } from 'src/constants';
import { IJwtPayload } from './jwtpayload.interface';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload: IJwtPayload): Promise<User> {
    const user = await this.userRepository.findOne({ username: payload.username });
    if (!user) {
      throw new UnauthorizedException('Invalid token or user not found');
    }

    return user;
  }
}