import { Body, Controller, HttpCode, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCredentialsDto } from './dto/userCredentials.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @Post('signup')
  signUp(@Body(ValidationPipe) userCredentials: UserCredentialsDto): Promise<void> {
    return this.authService.signUp(userCredentials);
  }

  @Post('signin')
  @HttpCode(200)
  signIn(@Body(ValidationPipe) userCredentials: UserCredentialsDto): Promise<void> {
    return this.authService.signIn(userCredentials);
  }
}
