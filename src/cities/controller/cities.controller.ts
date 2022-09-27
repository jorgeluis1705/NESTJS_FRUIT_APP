import { Fruit } from './../../fruits/model/fruit.model';
import { Citie } from './../model/city.model';
import { Observable } from 'rxjs';
import { CitiesService } from './../services/cities.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get('')
  getAll(): Observable<Citie[]> {
    return this.citiesService.getAllCities();
  }
  @Post('')
  createCity(@Body('') city: Citie): Observable<Citie> {
    return this.citiesService.createCity(city);
  }
}
