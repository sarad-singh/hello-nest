import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupUserDto } from './dto/signup-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  signup(@Body() signupUserDto: SignupUserDto) {
    return this.usersService.signup(signupUserDto);
  }

  @Post('signin')
  signin(@Body() signinUserDto: SigninUserDto) {
    return this.usersService.signin(signinUserDto);
  }
}
