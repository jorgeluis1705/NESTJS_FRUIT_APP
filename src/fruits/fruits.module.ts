import { Fruit, FruitSchema } from './model/fruit.model';
import { Module } from '@nestjs/common';
import { FruitsController } from './controller/fruits.controller';
import { FruitsService } from './services/fruits.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fruit.name, schema: FruitSchema }]),
  ],
  controllers: [FruitsController],
  providers: [FruitsService],
})
export class FruitsModule {}
