import { from, Observable } from 'rxjs';
import { FruitsModule } from './../fruits.module';
import { Fruit, FruitDocument } from './../model/fruit.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FruitsService {
  constructor(
    @InjectModel(Fruit.name) private FruitsModule: Model<FruitDocument>,
  ) {}

  createFruit(fruit: Fruit): Observable<Fruit> {
    return from(this.FruitsModule.create(fruit));
  }

  getAllFruits(): Observable<Fruit[]> {
    return from(this.FruitsModule.find().populate('city').exec());
  }
}
