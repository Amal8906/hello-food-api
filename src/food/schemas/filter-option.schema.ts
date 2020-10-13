import { CommonSchema } from "src/@core/schemas/common.schema";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, HookNextFunction } from 'mongoose';

export type FilterOptionDocument = FilterOption & Document;

@Schema()
export class FilterOption extends CommonSchema{
    @Prop({ required: true })
    key: string;
    
    @Prop({ required: true })
    name: string;

    @Prop()
    isChecked: boolean;
}

export const FilterOptionSchema = SchemaFactory.createForClass(FilterOption);