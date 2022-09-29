import { from, isObservable, Observable } from 'rxjs';
import { User, UserDocument } from './../models/user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  findAll(): Observable<User[]> {
    return from(this.userModel.find().exec());
  }
  getOneUser(id: string): Observable<User> {
    return from(this.userModel.findById(id).exec());
  }
  crateUSer(user: User): Observable<User> {
    return from(this.userModel.create(user));
  }

  async deleteUser(id: string): Promise<any> {
    return from(this.userModel.deleteOne({ _id: id }));
  }

  updateUSer(citi: User, id: string | number): Observable<User> {
    return from(
      this.userModel
        .findByIdAndUpdate({ _id: id }, citi)
        .populate('fruits')
        .exec(),
    );
  }
}
