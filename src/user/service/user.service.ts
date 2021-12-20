import { isObservable, Observable } from 'rxjs';
import { User, UserDocument } from './../models/user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  findAll(): Observable<User[]> {
    return new Observable((obs) => {
      this.userModel
        .find()
        .exec()
        .then((e) => {
          obs.next(e);
        })
        .catch((error) => obs.error(error))
        .finally(() => obs.complete());
    });
  }
}
