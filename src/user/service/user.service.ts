import { isObservable, Observable } from 'rxjs';
import { User, UserDocument } from './../models/user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
