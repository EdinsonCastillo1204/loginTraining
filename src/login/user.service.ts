import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './User.schema';
import { AuthUserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async Auth(user) {

    const userFound = await this.UserModel.findOne({
        userName: user.userName
    });
    
    if(!userFound){
        throw new HttpException('user no found', HttpStatus.NOT_FOUND)
    }

    return userFound;
  }
}

