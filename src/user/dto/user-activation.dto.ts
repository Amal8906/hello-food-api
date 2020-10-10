import { IsNotEmpty,  IsUUID } from 'class-validator';


export class UserActivationDto {
    @IsNotEmpty()
    @IsUUID()
    readonly id: string;

    @IsNotEmpty()
    readonly activationCode: string;
}
