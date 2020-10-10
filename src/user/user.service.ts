import {
  Injectable, HttpStatus, ConflictException,
  BadRequestException, NotFoundException, ForbiddenException
} from '@nestjs/common';
import { v4 } from 'uuid';
import * as argon2 from 'argon2';
import { addHours } from 'date-fns';
import { AES, enc } from 'crypto-ts';
import { SECRET_SALT } from 'src/@core/constants/config';

// User modules


import { LoginDto, MobileLoginDto } from './dto/login-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { AuthService } from 'src/auth';


@Injectable()
export class UserService {

  constructor(
    @InjectModel('user') private userModel: Model<UserDocument>,
    private authService: AuthService
  ) { }

  /**
   * Create New User
   * @param userData 
   */
  async _create(userData: any): Promise<any> {
    await this.isMobileUnique(userData.mobile)
    this.setRegistrationInfo(userData);
    const user = new this.userModel(userData);
    user.save();

    return this.authService.buildUserRO(user);
  }

  /**
   * Activate new register user
   * @param userActivationData 
   */
  async _userActivation() {

  }

  /**
   * Login using username, email or mobile
   * @param loginData   User login data
   */
  async _login(loginData: MobileLoginDto) {
    const user = await this.findUserByMobile(loginData.mobile);
    await this.checkPassword(loginData.password, user);
    return this.authService.buildUserRO(user);

  }

  /**
   * Login with One time password
   * @param forgetData 
   */
  async _forgetPassword(forgetData:any) {
    const user = await this.userModel.findOne({ mobile: forgetData.mobile});
    if (!user) {
      throw new NotFoundException('Mobile number is not registered.');
    }
    return { id: user._id, mobile:user.mobile };
  }

  async _verifyForgetPassword(forgetData: any){
    const user = await this.userModel.findOne({ mobile: forgetData.mobile});
    return this.authService.buildUserRO(user);
  }

  _checkRegisteredMobile(jsonData){
    return this.checkMobileNumber(jsonData.mobile);
  }

  ///////////////////////////////////////////////////////////////////////
  ///////////// PRIVATE METHOD  /////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

  private async isMobileUnique(mobile: string) {
    const user = await this.userModel.findOne({ mobile: mobile });
    if (user) {
      throw new BadRequestException('Mobile number already registered.');
    }
  }


  private setRegistrationInfo(user): any {
    user.verificationCode = AES.encrypt(v4(), SECRET_SALT).toString();
    user.verificationExpires = addHours(new Date(), 1);
  }

  private async findUserByMobile(mobile: string): Promise<any> {
    const user = await this.userModel.findOne({ mobile});
    if (!user) {
      throw new NotFoundException('Wrong mobile or password.');
    }
    return user;
  }

  private async checkPassword(attemptPass: string, user) {
    const match = await argon2.verify(user.password, attemptPass );
    if (!match) {
        throw new NotFoundException('Wrong mobile number or password.');
    }
    return match;
  }

  private async checkMobileNumber(mobile){
    const user = await this.userModel.findOne({ mobile});
    if (user) {
      return { statusCode: 200, message:'Mobile number already registered.'};
    }
    return { statusCode: 404, message:'Mobile number available for registered.'};
  }
}
