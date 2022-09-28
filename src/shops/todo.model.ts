import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';

@Schema({ timestamps: true })
export class TodoItemEntity extends Document {
  @Prop({ required: true })
  title!: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  completed!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

  @Prop({ default: 0 })
  priority!: number;

  @Prop()
  createdBy?: string;

  @Prop()
  updatedBy?: string;

  @Prop([
    {
      type: SchemaTypes.ObjectId,
      ref: 'SubTaskEntity',
    },
  ])
  subs?: Types.ObjectId[];
}

export const TodoItemEntitySchema =
  SchemaFactory.createForClass(TodoItemEntity);
TodoItemEntitySchema.virtual('subTasks', {
  ref: 'SubTaskEntity',
  localField: '_id',
  foreignField: 'todoItem',
});
export type TodoItemEntityDcoument = TodoItemEntity & Document;
