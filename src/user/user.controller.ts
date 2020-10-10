import { Controller, UsePipes, Post, Body, ValidationPipe, Patch, Req, UseGuards, Get, Head } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UserActivationDto, ResetPasswordDto, MobileLoginDto, ForgotPasswordDto } from './dto';
import { verify } from 'crypto';
import { LoginDto, EmailLoginDto } from './dto';
// import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request } from 'express';
// import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post('signup')
  async create(@Body() userData: CreateUserDto) {
    return this.userService._create(userData);
  }

  @Post('user-activation')
  async userActivation(@Body() userActivationData: UserActivationDto) {
    return this.userService._userActivation();
  }

  @Post('login')
  async login(@Body() loginData: MobileLoginDto) {
    return this.userService._login(loginData);
  }

  @Post('forget-password')
  async requestForgetPassword(@Body() userData: ForgotPasswordDto) {
    return this.userService._forgetPassword(userData);
  }

  @Post('verify-forget-password')
  async resetPassword(@Body() userData: any) {
    return this.userService._verifyForgetPassword(userData);
  }

  @Post('check-registered-mobile')
  async CheckRegisteredMobile(@Body() userData:any){
    return this.userService._checkRegisteredMobile(userData);
  }
}
