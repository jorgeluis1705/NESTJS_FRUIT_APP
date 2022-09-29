import { Citie } from './../../cities/model/city.model';
import { User } from './../../user/models/user.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Mongoose, SchemaTypes, Types } from 'mongoose';
import { Document } from 'mongoose';

export type FruitDocument = Fruit & Document;

@Schema()
export class Fruit extends Document {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: Number,
  })
  count: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Citie', required: true })
  city!: Types.ObjectId;
}
export const FruitSchema = SchemaFactory.createForClass(Fruit);
