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
}
