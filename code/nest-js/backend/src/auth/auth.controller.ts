import { Body, Controller, HttpCode, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserCredentialsDto } from './dto/userCredentials.dto';
import { GetUser } from './getUser.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @Post('signup')
  public signUp(@Body(ValidationPipe) userCredentials: UserCredentialsDto): Promise<void> {
    return this.authService.signUp(userCredentials);
  }

  @Post('signin')
  @HttpCode(200)
  public signIn(@Body(ValidationPipe) userCredentials: UserCredentialsDto): Promise<{ token: string }> {
    return this.authService.signIn(userCredentials);
  }
}
