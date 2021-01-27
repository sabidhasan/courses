import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { UserCredentialsDto } from './dto/userCredentials.dto';
import { IJwtPayload } from './jwtpayload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  public async signUp(userCredentials: UserCredentialsDto): Promise<void> {
    return this.userRepository.signUp(userCredentials);
  }

  public async signIn(userCredentials: UserCredentialsDto): Promise<{ token: string }> {
    const username = await this.userRepository.signIn(userCredentials);
    if (!username) {
      throw new NotFoundException('Invalid credentials');
    }

    const jwtPayload: IJwtPayload = { username };
    const token = this.jwtService.sign(jwtPayload);
    return { token };
  }
}
