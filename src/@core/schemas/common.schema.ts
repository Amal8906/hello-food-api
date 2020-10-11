import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CommonSchema {

    @Prop()
    createdBy: string;

    @Prop()
    createOn: string;

    @Prop()
    modifiedBy: string;

    @Prop()
    modifiedOn: string;

    @Prop()
    isActive: number;

    @Prop()
    isDeleted: number;
}
