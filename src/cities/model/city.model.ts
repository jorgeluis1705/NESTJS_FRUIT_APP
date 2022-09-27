import { Fruit, FruitDocument } from './../../fruits/model/fruit.model';
import { User } from './../../user/models/user.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Document } from 'mongoose';
export type CityDocument = Citie & Document;

@Schema()
export class Citie {
  @Prop({
    type: String,
  })
  mame: string;

  @Prop({
    type: Types.DocumentArray,
    ref: Fruit.name,
  })
  fruits: Fruit[];
}
export const CitieSchema = SchemaFactory.createForClass(Citie);
