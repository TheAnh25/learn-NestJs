import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // some requests from client
  @Post('register')
  register(@Body() body: AuthDTO) {
    return this.authService.register(body);
  }

  @Post('login')
  login() {
    return this.authService.login();
  }
}
