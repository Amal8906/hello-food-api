import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CommonDto {

    @IsOptional()
    @IsNumber()
    public id: number  

    @IsOptional()
    @IsNumber()
    public createdBy: number;
    
    @IsOptional()
    @IsNumber()
    public modifiedBy: number;

    @IsOptional()
    @IsString()
    createdOn: string;

    @IsOptional()
    @IsString()
    modifiedOn: string;

    @IsOptional()
    @IsBoolean()
    isActive: boolean;

    @IsOptional()
    @IsBoolean()
    isDelete: boolean;
}
