import { ICommon } from "src/@core/interfaces/common.interface";

export interface IUser extends ICommon {
    username            : string;
    email               : string;
    mobile              : string;
    firstName           : string;
    lastName            : string;
    bio                 : string;
    image               : string;
    password            : string;
    roles               : [string];
    verification        : string;
    verified            : boolean;
    verificationExpires : Date;
    loginAttempts?      : number;
    blockExpires?       : Date;
}
