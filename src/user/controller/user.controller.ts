import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { UserService } from './../service/user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('')
  getAll(): Observable<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  getOne(@Param() params): Observable<User> {
    return this.userService.getOneUser(params['id']);
  }
  @Post('/')
  postUser(@Body() city: User): Observable<User> {
    return this.userService.crateUSer(city);
    // return of(JSON.stringify(city));
  }
  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') id: string): Promise<string> {
    await this.userService.deleteUser(id);
    return id;
  }

  @Put(':id')
  @HttpCode(200)
  updateUser(
    @Param('id') id: string | number,
    @Body() user: User,
  ): Observable<User> {
    return this.userService.updateUSer(user, id);
  }
}
