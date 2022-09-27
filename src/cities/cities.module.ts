import { Citie, CitieSchema } from './model/city.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesController } from './controller/cities.controller';
import { CitiesService } from './services/cities.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Citie.name, schema: CitieSchema }]),
  ],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
