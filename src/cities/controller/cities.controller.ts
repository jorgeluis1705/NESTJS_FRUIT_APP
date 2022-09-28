import { TodoItemEntity } from './../../shops/todo.model';
import { SubTaskEntity } from './../../shops/sub-task.model';
import { Fruit } from './../../fruits/model/fruit.model';
import { Citie } from './../model/city.model';
import { Observable, of } from 'rxjs';
import { CitiesService } from './../services/cities.service';
import { Body, Controller, Get, Post, Request } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get('')
  getAll(): Observable<Citie[]> {
    return this.citiesService.getAllCities();
  }
  @Post('todo')
  createTodo(@Request() equest: Request): Observable<any> {
    // return of('hola');
    return this.citiesService.createTodoItem((equest.body as any).todo);
  }
  @Post('sub')
  createSub(@Request() equest: Request): Observable<SubTaskEntity> {
    return this.citiesService.createSubTask((equest.body as any).sub);
  }

  @Get('todo')
  getTodo(): Observable<TodoItemEntity[]> {
    return this.citiesService.getAllTodo();
  }
  @Get('sub')
  getSub(): Observable<SubTaskEntity[]> {
    return this.citiesService.getAllSub();
  }
}
