
import { IsNumber } from 'class-validator';

export class IdTypeDto {
  @IsNumber()
  public id: number    
}
