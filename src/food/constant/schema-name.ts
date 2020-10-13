import { FoodItemSchema } from "../schemas/food-list-schema";
import { FilterOptionSchema } from "../schemas/filter-option.schema";

export const SCHEMA_NAMES = [
    {name:'foodItem', schema: FoodItemSchema}, 
    {name:'filterOption', schema: FilterOptionSchema}
]