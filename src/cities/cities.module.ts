import { Fruit, FruitSchema } from './../fruits/model/fruit.model';
import { TodoItemEntity, TodoItemEntitySchema } from './../shops/todo.model';
import {
  SubTaskDocument,
  SubTaskEntity,
  SubTaskEntitySchema,
} from './../shops/sub-task.model';
import { Citie, CitieSchema } from './model/city.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesController } from './controller/cities.controller';
import { CitiesService } from './services/cities.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Citie.name, schema: CitieSchema },
      { name: SubTaskEntity.name, schema: SubTaskEntitySchema },
      { name: TodoItemEntity.name, schema: TodoItemEntitySchema },
      { name: Fruit.name, schema: FruitSchema },
    ]),
  ],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
