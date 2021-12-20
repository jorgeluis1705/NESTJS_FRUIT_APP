import { UserService } from './../service/user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAll(): Promise<string> {
    const s = await this.userService.findAll();
    console.log(s);
    return 'SIUU';
  }
}
