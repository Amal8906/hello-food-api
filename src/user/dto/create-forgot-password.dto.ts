import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString } from 'class-validator';


export class ForgotPasswordDto {

  // @IsString()
  // @MaxLength(250)
  // readonly email: string;

  @IsString()
  @MaxLength(25)
  readonly mobile: string;

  // @IsString()
  // @MaxLength(100)
  // readonly username: string;

}
