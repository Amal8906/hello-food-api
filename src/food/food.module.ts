import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodItemSchema } from './schemas/food-list-schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'foodItem', schema: FoodItemSchema}])
  ],
  providers: [FoodService],
  controllers: [FoodController],
  exports:[FoodModule]
})
export class FoodModule {}
