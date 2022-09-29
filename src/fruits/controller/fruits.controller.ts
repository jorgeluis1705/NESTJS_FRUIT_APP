import { Observable } from 'rxjs';
import { Fruit } from './../model/fruit.model';
import { FruitsService } from './../services/fruits.service';
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Post('')
  @HttpCode(200)
  createOne(@Body() fruit: Fruit): Observable<Fruit> {
    return this.fruitsService.createFruit(fruit);
  }
  @Get('')
  @HttpCode(200)
  getAll(): Observable<Fruit[]> {
    return this.fruitsService.getAllFruits();
  }
}
