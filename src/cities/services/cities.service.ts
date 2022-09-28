import { SubTaskEntity, SubTaskDocument } from './../../shops/sub-task.model';
import {
  TodoItemEntityDcoument,
  TodoItemEntity,
} from './../../shops/todo.model';
import { from, Observable, of } from 'rxjs';
import { Citie, CityDocument } from './../model/city.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(Citie.name) private citiModel: Model<CityDocument>,
    @InjectModel(TodoItemEntity.name)
    private todoModel: Model<TodoItemEntityDcoument>,
    @InjectModel(SubTaskEntity.name) private subModel: Model<SubTaskDocument>,
  ) {}

  createCity(City: Citie): Observable<Citie> {
    return from(this.citiModel.create(City));
  }
  getAllCities(): Observable<Citie[]> {
    return from(this.citiModel.find().exec());
  }
  getAllTodo(): Observable<TodoItemEntity[]> {
    return from(this.todoModel.find().populate('subs').exec());
  }
  getAllSub(): Observable<SubTaskEntity[]> {
    return from(this.subModel.find().populate('todoItem').exec());
  }
  createTodoItem(
    todoItem: TodoItemEntityDcoument,
  ): Observable<TodoItemEntityDcoument> {
    return from(this.todoModel.create(todoItem));
  }
  createSubTask(SubTask: SubTaskDocument): Observable<SubTaskDocument> {
    return from(this.subModel.create(SubTask));
  }
}
