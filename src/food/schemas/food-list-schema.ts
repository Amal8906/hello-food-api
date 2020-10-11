import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HookNextFunction } from 'mongoose';
import { CommonSchema } from 'src/@core/schemas/common.schema';
export type FoodItemDocument = FoodItem & Document;

@Schema()
export class FoodItem extends CommonSchema {

    @Prop({ required: true })
    title: string;

    @Prop()
    subTitle: string;

    @Prop()
    foodType: string;

    @Prop()
    offer: string;

    @Prop()
    deliveryTime: number;

    @Prop()
    rating: number;

    @Prop()
    price: number;

    @Prop()
    description: String;

    @Prop()
    isBookmark: boolean;

    @Prop()
    image: string;

}
export const FoodItemSchema = SchemaFactory.createForClass(FoodItem);