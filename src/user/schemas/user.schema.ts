import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HookNextFunction } from 'mongoose';
import * as argon2 from 'argon2';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({required:true})
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop({required:true})
  mobile: string;

  @Prop({required:true})
  password: string;

  @Prop()
  role: string;

  @Prop()
  image: string;

  @Prop()
  verified: boolean;
 
  @Prop()
  verificationCode: string;

  @Prop()
  verificationExpires: string;

  @Prop()
  createdBy: string;

  @Prop()
  createdOn: string;

  @Prop()
  modifiedBy:string;

  @Prop()
  modifiedOn:string;

  @Prop()
  isActive: boolean;

  @Prop()
  isDeleted: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function(next: HookNextFunction) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    this['password'] = await argon2.hash(this['password']);
    return next();
  } catch (err) {
    return next(err);
  }
});