import { IsString, IsNotEmpty } from "class-validator";


export class FilterOptionDto{

    @IsNotEmpty()
    @IsString()
    key: string;

    @IsNotEmpty()
    @IsString()
    name: string;
}