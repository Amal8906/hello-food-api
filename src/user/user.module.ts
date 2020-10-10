import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';


import { JWT_SECRET_KEY } from 'src/@core/constants';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { AuthModule, AuthService } from 'src/auth';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    AuthModule
  ],
  controllers: [UserController],
  providers: [UserService, AuthService],
  exports: [AuthModule]
})
export class UserModule { }
