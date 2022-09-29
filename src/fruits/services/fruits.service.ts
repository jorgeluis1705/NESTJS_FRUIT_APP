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
  getById(id: string | number): Observable<Fruit> {
    return from(this.FruitsModule.findById(id).populate('fruits').exec());
  }
  getAllFruits(): Observable<Fruit[]> {
    return from(this.FruitsModule.find().populate('city').exec());
  }
  updateFruit(citi: Fruit, id: string | number): Observable<Fruit> {
    return from(
      this.FruitsModule.findByIdAndUpdate({ _id: id }, citi)
        .populate('fruits')
        .exec(),
    );
  }
  async deleteFruit(id: string): Promise<any> {
    return from(this.FruitsModule.deleteOne({ _id: id }));
  }
}
