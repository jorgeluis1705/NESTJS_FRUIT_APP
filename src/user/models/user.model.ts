import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop({ required: [true, 'name es riquired'], type: 'String' })
  name: string;

  @Prop({ type: 'String', required: [true, 'Email is requiered'] })
  email: number;

  @Prop({ type: String, required: [true, 'is Requeired passowr'] })
  password: string;
  @Prop()
  avatar: string;
  @Prop({
    required: true,
    type: String,
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
