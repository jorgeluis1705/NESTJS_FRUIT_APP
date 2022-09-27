import { Module } from '@nestjs/common';
import { CitiesController } from './controller/cities.controller';

@Module({
  controllers: [CitiesController],
})
export class CitiesModule {}
