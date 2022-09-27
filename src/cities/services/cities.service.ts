import { from, Observable, of } from 'rxjs';
import { Citie, CityDocument } from './../model/city.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(Citie.name) private citiModel: Model<CityDocument>,
  ) {}

  createCity(City: Citie): Observable<Citie> {
    return from(this.citiModel.create(City));
  }
  getAllCities(): Observable<Citie[]> {
    return from(this.citiModel.find().exec());
  }
}
