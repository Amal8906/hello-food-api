import { Controller, Get, Body, Post, UseGuards } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodItemDto } from './dto/food-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@UseGuards(RolesGuard)
@Controller('food')
export class FoodController {

    constructor(private readonly foodService: FoodService){

    }

    @UseGuards(JwtAuthGuard)
    @Roles('user')
    @Post('create')
    createFoodItem(@Body() foodItem: FoodItemDto){
        return this.foodService._createFoodItem(foodItem);
    }
}
