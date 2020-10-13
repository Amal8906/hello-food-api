import { Controller, Get, Body, Post, UseGuards, HttpCode } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodItemDto } from './dto/food-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { FilterOptionDto } from './dto/filter-option.dto';

@UseGuards(RolesGuard)
@Controller('food')
export class FoodController {

    constructor(private readonly foodService: FoodService) {

    }

    @UseGuards(JwtAuthGuard)
    // @HttpCode(201)
    // @Roles('user')
    @Post('create')
    createFoodItem(@Body() foodItem: FoodItemDto) {
        return this.foodService._createFoodItem(foodItem);
    }

    @Post('list')
    @HttpCode(200)
    foodItemList(@Body() filterOptions: any) {
        return this.foodService._foodItemList(filterOptions);
    }

    @Post('filter-option')
    createFilterOption(@Body() jsonData: FilterOptionDto) {
        return this.foodService._createFilterOption(jsonData);
    }

    @Get('filter-option')
    getFilterOption() {
        return this.foodService._getFilterOption();
    }

}
