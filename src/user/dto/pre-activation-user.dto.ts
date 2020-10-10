import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class PreActivationUserDto {

  @Expose()
  public id: number;

  @Expose()
  public username: string;

  @Expose()
  public email: string;

  @Expose()
  public mobile: string;

  @Expose()
  public password: string;

  @Expose()
  public firstName: string;

  @Expose()
  public lastName: string;

  @Expose()
  public activationCode: string;

  @Expose()
  public expireOn: string;

}
