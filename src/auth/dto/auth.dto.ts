import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// defint a "type" of "authentcation request"
export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
