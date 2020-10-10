import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString } from 'class-validator';


export class LoginDto {

    @IsString()
    readonly username: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly mobile: string;
    
    @IsString()
    readonly password: string;
  }

  export class UsernameLoginDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    readonly username: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    readonly password: string;
  }

  export class EmailLoginDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    readonly email: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    readonly password: string;
  }

  export class MobileLoginDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    readonly mobile: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    readonly password: string;
  }