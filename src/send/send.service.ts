import { Fruit, FruitDocument } from './../fruits/model/fruit.model';
import { Injectable } from '@nestjs/common';
import { Citie, CityDocument } from 'src/cities/model/city.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SendService {
  constructor(
    @InjectModel(Citie.name) private cityModel: Model<CityDocument>,
    @InjectModel(Fruit.name) private fruitModel: Model<FruitDocument>,
  ) {}

  async sendDataBetweemShops(
    originId: string,
    countToSend: number,
    destinyID: string,
    fruitName: string,
  ): Promise<any> {
    const cityOrigin = await this.cityModel
      .findById(originId)
      .populate('fruits')
      .exec();
    const cityDestiny = await this.cityModel
      .findById(destinyID)
      .populate('fruits')
      .exec();

    const fruitOrigin = cityOrigin.fruits.find(
      (e: any) => e.name === fruitName,
    );
    const fruitDestiny = cityDestiny.fruits.find(
      (e: any) => e.name === fruitName,
    );

    if (!(countToSend > (fruitOrigin as any).count)) {
      if ((fruitOrigin as any).count >= 0) {
        (fruitDestiny as any).count += countToSend;
        (fruitOrigin as any).count -= countToSend;
      }
    }

    await this.fruitModel.create(fruitDestiny);
    await this.fruitModel.create(fruitOrigin);
  }
}
