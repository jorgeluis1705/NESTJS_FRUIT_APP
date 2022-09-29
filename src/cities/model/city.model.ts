import { Fruit, FruitDocument } from './../../fruits/model/fruit.model';
import { User } from './../../user/models/user.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { Document } from 'mongoose';
export type CityDocument = Citie & Document;

@Schema()
export class Citie {
  @Prop({
    type: String,
  })
  name: string;
  @Prop([
    {
      type: SchemaTypes.ObjectId,
      ref: 'Fruit',
    },
  ])
  fruits?: Types.ObjectId[];
}
export const CitieSchema = SchemaFactory.createForClass(Citie);
CitieSchema.virtual('fruitsShop', {
  ref: 'Fruit',
  localField: '_id',
  foreignField: 'city',
});
