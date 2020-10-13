import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FoodItemDocument } from './schemas/food-list-schema';
import { InjectModel } from '@nestjs/mongoose';
import { FilterOptionDocument } from './schemas/filter-option.schema';
import { FilterOptionDto } from './dto/filter-option.dto';

@Injectable()
export class FoodService {
    constructor(
        @InjectModel('foodItem')
        private foodItemModel: Model<FoodItemDocument>,

        @InjectModel('filterOption')
        private filterOptionModel: Model<FilterOptionDocument>,
    ) {
    }


    async _createFoodItem(foodItem: any) {
        const food = new this.foodItemModel(foodItem);
        food.save();
        return food;
    }

    async _foodItemList(filterOptions: any) {
        return this.foodItemModel.find(filterOptions)
    }


    async _createFilterOption(jsonData: FilterOptionDto) {
        const filterOption = new this.filterOptionModel(jsonData);
        filterOption.save();
        return filterOption;        
    }

    async _getFilterOption(){
        return this.filterOptionModel.find({});
    }
}
