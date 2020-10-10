import { MobileLoginDto } from './dto/login-user.dto';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { AuthService } from 'src/auth';
export declare class UserService {
    private userModel;
    private authService;
    constructor(userModel: Model<UserDocument>, authService: AuthService);
    _create(userData: any): Promise<any>;
    _userActivation(): Promise<void>;
    _login(loginData: MobileLoginDto): Promise<{
        id: any;
        firstName: any;
        lastName: any;
        username: any;
        email: any;
        mobile: any;
        image: any;
        access_token: string;
    }>;
    _forgetPassword(forgetData: any): Promise<{
        id: any;
        mobile: string;
    }>;
    _verifyForgetPassword(forgetData: any): Promise<{
        id: any;
        firstName: any;
        lastName: any;
        username: any;
        email: any;
        mobile: any;
        image: any;
        access_token: string;
    }>;
    _checkRegisteredMobile(jsonData: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    private isMobileUnique;
    private setRegistrationInfo;
    private findUserByMobile;
    private checkPassword;
    private checkMobileNumber;
}
