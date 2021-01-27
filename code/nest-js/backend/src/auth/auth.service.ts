import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { UserCredentialsDto } from './dto/userCredentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  public async signUp(userCredentials: UserCredentialsDto): Promise<void> {
    return this.userRepository.signUp(userCredentials);
  }

  public async signIn(userCredentials: UserCredentialsDto): Promise<void> {
    const username = await this.userRepository.signIn(userCredentials);
    if (!username) {
      throw new NotFoundException('Invalid credentials');
    }
  }
}
