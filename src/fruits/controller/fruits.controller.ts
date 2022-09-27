import { FruitsService } from './../services/fruits.service';
import { Controller } from '@nestjs/common';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}
}
