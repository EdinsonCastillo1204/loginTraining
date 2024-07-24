import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model }from 'mongoose';
import { Login, LoginDocument } from './login.schema';
import { CreateLoginDTO} from './login.dto'


@Injectable()
export class LoginService {

    constructor(@InjectModel(Login.name) private loginModel: Model<LoginDocument>){}

    async getLogin(): Promise<Login[]>{
        const login=await this.loginModel.find();
        return login;
    }

    async getLoginfindByid(loginID: string):Promise<Login>{
        const login= await this.loginModel.findById(loginID);
        return login;
    }

    async createLogin (CreateLoginDTO:CreateLoginDTO): Promise<Login>{
        const login= new this.loginModel(CreateLoginDTO);
        return await login.save();

    }

    async deleteLoginId (loginID: string):  Promise<Login>{
        const deleteLogin=await this.loginModel.findByIdAndDelete(loginID);
        return deleteLogin;
    }

    async updateLoginId (loginID:string,CreateLoginDTO:CreateLoginDTO): Promise<Login>{
        const updateLogin= await this.loginModel.findByIdAndUpdate(loginID,CreateLoginDTO,{new:true});
        return updateLogin;
    }
}
