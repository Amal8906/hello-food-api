import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodItemSchema } from './schemas/food-list-schema';
import { FilterOption } from './schemas/filter-option.schema';
import { SCHEMA_NAMES } from './constant/schema-name';

@Module({
  imports:[
    MongooseModule.forFeature(SCHEMA_NAMES)
  ],
  providers: [FoodService],
  controllers: [FoodController],
  exports:[FoodModule]
})
export class FoodModule {}
