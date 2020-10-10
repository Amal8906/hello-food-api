import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import { PreActivationUserDto } from 'src/user/dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly mailerService;
    constructor(jwtService: JwtService, mailerService: MailerService);
    preActiveUserRO(user: PreActivationUserDto): {
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        mobile: string;
    };
    buildNewUser(user: PreActivationUserDto): {
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        mobile: string;
        password: string;
    };
    buildUserRO(user: any): {
        id: any;
        firstName: any;
        lastName: any;
        username: any;
        email: any;
        mobile: any;
        image: any;
        access_token: string;
    };
    private generateJWT;
    private buildPayload;
    comparePassword(dbPassword: string, userPassword: string): Promise<boolean>;
    encryptData(data: string): Promise<string>;
    decryptData(code: string): Promise<string>;
    genSixDigitNo(): Promise<number>;
    genEncryptCode(): Promise<string>;
    createExpiryDate(time_ms: number): Promise<any>;
    sendMail(sendTo: string, mailSubject: string, template: string, data: any): Promise<any>;
}
