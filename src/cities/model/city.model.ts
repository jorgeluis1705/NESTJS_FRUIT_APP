import { User } from './../../user/models/user.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type CityDocument = Citie & Document;

@Schema()
export class Citie {
  @Prop({
    type: Types.ObjectId,
  })
  id: string;

  @Prop({
    type: String,
  })
  mame: string;

  @Prop({
    type: Types.DocumentArray,
    ref: User.name,
  })
  fruits: any[];
}
export const CitieSchema = SchemaFactory.createForClass(Citie);
