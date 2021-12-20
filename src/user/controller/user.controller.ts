import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { UserService } from './../service/user.service';
import { Controller, Get, Param, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAll(): Observable<User[]> {
    return new Observable<User[]>((obs) => {
      this.userService.findAll().subscribe({
        next: (e) => obs.next(e),
        error: (err) => obs.next(err),
        complete: () => obs.complete(),
      });
    });
  }
  @Get('/:id')
  getOne(@Param() params): Observable<User> {
    return new Observable<User>((obs) => {
      this.userService.getOneUser(params['id']).subscribe({
        next: (e) => obs.next(e),
        error: (err) => obs.next(err),
        complete: () => obs.complete(),
      });
    });
  }
}
