import { SendService } from './send.service';
import { Body, Controller, Param, Post, Put } from '@nestjs/common';

@Controller('send')
export class SendController {
  constructor(private readonly sendService: SendService) {}

  @Put(':origin/:destiny')
  async sendRequest(
    @Body() body: { count: number; name: string },
    @Param() params,
  ) {
    const { origin, destiny } = params;
    const { count, name } = body;
    await this.sendService.sendDataBetweemShops(origin, count, destiny, name);
    return JSON.stringify(body);
  }
}
