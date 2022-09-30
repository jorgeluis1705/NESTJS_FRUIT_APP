import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Citie, CitieSchema } from 'src/cities/model/city.model';
import { Fruit, FruitSchema } from 'src/fruits/model/fruit.model';
import { SendController } from './send.controller';
import { SendService } from './send.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Citie.name, schema: CitieSchema },
      { name: Fruit.name, schema: FruitSchema },
    ]),
  ],
  controllers: [SendController],
  providers: [SendService],
})
export class SendModule {}
