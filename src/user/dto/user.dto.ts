import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserDto {

  @Expose()
  public id: number;

  @Expose()
  public username: string;

  @Expose()
  public email: string;

  // @Expose()
  // public password: string;

  @Expose()
  public firstName: string;

  @Expose()
  public lastName: string;

  @Expose()
  public isActive: string;

  @Expose()
  public bio: string | null;

  @Expose()
  public token: string;

}
