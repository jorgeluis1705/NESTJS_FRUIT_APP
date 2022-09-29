import { Citie } from './../model/city.model';
import { Observable, of } from 'rxjs';
import { CitiesService } from './../services/cities.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get('')
  @HttpCode(200)
  getAll(): Observable<Citie[]> {
    return this.citiesService.getAllCities();
  }
  @Post('')
  @HttpCode(201)
  createCity(@Body() city: Citie): Observable<any> {
    return this.citiesService.createCity(city);
    // return of(JSON.stringify(city));
  }

  @Get(':id')
  @HttpCode(200)
  getById(@Param('id') id: string | number): Observable<Citie> {
    return this.citiesService.getById(id);
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') id: string): Promise<string> {
    await this.citiesService.deleteCity(id);
    return id;
  }

  @Put(':id')
  @HttpCode(200)
  updateCity(
    @Param('id') id: string | number,
    @Body() city: Citie,
  ): Observable<Citie> {
    return this.citiesService.updateCity(city, id);
  }

  // @Post('todo')
  // createTodo(@Request() equest: Request): Observable<any> {
  //   // return of('hola');
  //   return this.citiesService.createTodoItem((equest.body as any).todo);
  // }
  // @Post('sub')
  // createSub(@Request() equest: Request): Observable<SubTaskEntity> {
  //   return this.citiesService.createSubTask((equest.body as any).sub);
  // }

  // @Get('todo')
  // getTodo(): Observable<TodoItemEntity[]> {
  //   return this.citiesService.getAllTodo();
  // }
  // @Get('sub')
  // getSub(): Observable<SubTaskEntity[]> {
  //   return this.citiesService.getAllSub();
  // }
}
