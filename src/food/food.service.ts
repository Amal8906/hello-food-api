import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FoodItemDocument } from './schemas/food-list-schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FoodService {
    constructor(
        @InjectModel('foodItem') 
        private foodItemModel: Model<FoodItemDocument>
    ){      
    }


    async _createFoodItem(foodItem: any){
        const food = new this.foodItemModel(foodItem);
        food.save();
        return food;
    }
}
