import { UserService } from './user.service';
import { CreateUserDto, UserActivationDto, MobileLoginDto, ForgotPasswordDto } from './dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userData: CreateUserDto): Promise<any>;
    userActivation(userActivationData: UserActivationDto): Promise<void>;
    login(loginData: MobileLoginDto): Promise<{
        id: any;
        firstName: any;
        lastName: any;
        username: any;
        email: any;
        mobile: any;
        image: any;
        access_token: string;
    }>;
    requestForgetPassword(userData: ForgotPasswordDto): Promise<{
        id: any;
        mobile: string;
    }>;
    resetPassword(userData: any): Promise<{
        id: any;
        firstName: any;
        lastName: any;
        username: any;
        email: any;
        mobile: any;
        image: any;
        access_token: string;
    }>;
    CheckRegisteredMobile(userData: any): Promise<{
        statusCode: number;
        message: string;
    }>;
}
