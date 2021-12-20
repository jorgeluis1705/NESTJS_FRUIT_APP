import { UserService } from './../service/user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAll(): string {
    this.userService.findAll().subscribe((e) => {
      console.log(e);
    });
    return 'SIUU';
  }
}
