import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {

  // @IsString()
  // @IsNotEmpty()
  // @MinLength(5)
  // @MaxLength(255)
  readonly username: string;

  @IsString()
  // @IsNotEmpty() 
  // @MinLength(5)
  // @MaxLength(255)
  // @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  // @MinLength(6)
  // @MaxLength(25)
  readonly mobile: string;

  @IsString()
  @IsNotEmpty()
  // @MinLength(5)
  // @MaxLength(255)
  readonly firstName: string;

  @IsString()
  // @IsNotEmpty()
  // @MinLength(5)
  // @MaxLength(255)
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  // @MinLength(5)
  // @MaxLength(1024)
  readonly password: string;

}




