import { IsEmail, IsString, Matches, MaxLength } from 'class-validator';
import { Match } from 'src/decorators/match.decorator';

export class SignupUserDto {
  @IsString()
  @MaxLength(55)
  name: string;

  @IsEmail()
  email: string;

  @Matches(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$',
    '',
    {
      message:
        'password requires minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    },
  )
  password: string;

  @Match('password', { message: 'password and confirm password must match' })
  confirmPassword: string;
}
