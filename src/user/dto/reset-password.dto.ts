import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString, IsNumber } from 'class-validator';


export class ResetPasswordDto {
  
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsNumber()
    readonly reqPassCode: number;
  }
