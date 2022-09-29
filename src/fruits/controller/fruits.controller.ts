import { Observable } from 'rxjs';
import { Fruit } from './../model/fruit.model';
import { FruitsService } from './../services/fruits.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Get(':id')
  @HttpCode(200)
  getById(@Param('id') id: string | number): Observable<Fruit> {
    return this.fruitsService.getById(id);
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') id: string): Promise<string> {
    await this.fruitsService.deleteFruit(id);
    return id;
  }
  @Put(':id')
  @HttpCode(200)
  updateCity(
    @Param('id') id: string | number,
    @Body() fruit: Fruit,
  ): Observable<Fruit> {
    return this.fruitsService.updateFruit(fruit, id);
  }
}
