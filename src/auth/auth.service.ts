import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import { PreActivationUserDto } from 'src/user/dto';
import * as argon2 from 'argon2';
import { SECRET_SALT } from 'src/@core/constants';
import { AES, enc } from 'crypto-ts';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly mailerService: MailerService,
    ) {
    }
    
    public preActiveUserRO(user: PreActivationUserDto){
        const preActiveUser = {
            id          : user.id,
            firstName   : user.firstName,
            lastName    : user.lastName,
            username    : user.username,
            email       : user.email,
            mobile      : user.mobile,
        };
        return preActiveUser;
    }



    public buildNewUser( user: PreActivationUserDto ){
        const newUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            mobile: user.mobile,
            password: user.password,
        };
        return newUser;
    }

    public buildUserRO(user: any) {
        const userRO = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            mobile: user.mobile,
            image: user.image,
            access_token: this.generateJWT(user),
        };
        return userRO;
        //return {user: userRO};
    }

    private generateJWT(user: any) {
        return this.jwtService.sign(this.buildPayload(user));
    }


    private buildPayload(user: any) {
        const payload = {
            id: user.id,
            isSuperUser: user.isSuperUser,
            isStaff: user.isStaff,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            mobile: user.mobile,
        };
        return payload;
    }


    public async comparePassword(dbPassword:string, userPassword: string): Promise<boolean>{
        return argon2.verify(dbPassword, Buffer.from(userPassword))
    }

    public async encryptData(data: string): Promise<string>{
        return AES.encrypt(data, SECRET_SALT).toString();
    }

    public async decryptData(code: string): Promise<string>{
        return AES.decrypt(code, SECRET_SALT).toString(enc.Utf8);
    }

    public async genSixDigitNo(){
        return Math.floor(100000 + Math.random() * 900000)
    }

    public async genEncryptCode(): Promise<string>{
        return AES.encrypt((await this.genSixDigitNo()).toString(), SECRET_SALT).toString();
    }

    public async createExpiryDate(time_ms: number): Promise<any>{
        return new Date(Date.now() + time_ms);   //7*24*60*60*1000 same as 7 days
    }

    public async sendMail(sendTo: string, mailSubject: string, template: string, data:any){
        return this.mailerService.sendMail({ to: sendTo, subject: mailSubject, template: template, context: data });
    }


   
}
