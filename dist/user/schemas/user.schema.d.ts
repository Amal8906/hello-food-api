import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    role: string;
    image: string;
    verified: boolean;
    verificationCode: string;
    verificationExpires: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
    isActive: boolean;
    isDeleted: boolean;
}
export declare const UserSchema: import("mongoose").Schema<any>;
