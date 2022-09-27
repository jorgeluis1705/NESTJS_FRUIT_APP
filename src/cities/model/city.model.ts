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
}
export const CitieSchema = SchemaFactory.createForClass(Citie);
