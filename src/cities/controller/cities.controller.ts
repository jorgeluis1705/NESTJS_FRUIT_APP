import { Controller, Get } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  @Get('')
  getAll(): any[] {
    return [];
  }
}
