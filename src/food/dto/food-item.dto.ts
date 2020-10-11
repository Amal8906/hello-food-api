import { IsString, IsNumber, IsBoolean, IsEmpty, IsNotEmpty, IsOptional } from 'class-validator'

export class FoodItemDto {

    
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    subTitle: string;

    @IsOptional()
    @IsString()
    foodType: string;

    @IsOptional()
    @IsNumber()
    offer: number;

    @IsOptional()
    @IsNumber()
    deliveryTime: number;

    @IsOptional()
    @IsNumber()
    rating: number;

    @IsOptional()
    @IsNumber()
    price: number;

    @IsOptional()
    @IsString()
    description: String;

    @IsBoolean()
    isBookmark: boolean;

    @IsOptional()
    @IsString()
    image: string;
    
}
