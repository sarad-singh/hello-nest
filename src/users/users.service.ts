import { Injectable } from '@nestjs/common';
import { SigninUserDto } from './dto/signin-user.dto';
import { SignupUserDto } from './dto/signup-user.dto';

@Injectable()
export class UsersService {
  signin(signinUserDto: SigninUserDto) {
    return 'This action returns authentication token for user';
  }

  signup(signinUserDto: SignupUserDto) {
    return 'This action returns created user';
  }
}
