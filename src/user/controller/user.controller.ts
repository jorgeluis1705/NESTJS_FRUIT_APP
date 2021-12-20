import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { UserService } from './../service/user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAll(): Observable<User[]> {
    return new Observable<any>((obs) => {
      this.userService.findAll().subscribe({
        next: (e) => obs.next(e),
        error: (err) => obs.next(err),
        complete: () => obs.complete(),
      });
    });
  }
}
