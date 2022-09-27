import { Citie } from './../model/city.model';
import { Observable } from 'rxjs';
import { CitiesService } from './../services/cities.service';
import { Controller, Get } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get('')
  getAll(): Observable<Citie[]> {
    return this.citiesService.getAllCities();
  }
}
