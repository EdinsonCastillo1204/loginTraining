import { Controller,Post, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { CreateLoginDTO}from './login.dto'
import { LoginService } from './login.service';
import { Login } from './login.schema';


@Controller('login')

export class LoginController {
  constructor( private readonly loginService:LoginService){}
  
  @Post('/create')
  async createPost(@Body() Login: CreateLoginDTO){
    const LoginCreated=await this.loginService.createLogin(Login)
    return LoginCreated
  }
  
  
  @Get('/list')
  async findAll():Promise<Login[]>{
    return this.loginService.getLogin();
  }

  @Get('/find/:id')
  async findByID(@Param("id")id: string): Promise<Login>{
    return this.loginService.getLoginfindByid(id);
  }

 

  @Put('/update/:id')
  async update(@Param('id')id:string, @Body()CreateLoginDTO: CreateLoginDTO):Promise<Login>{
    return this.loginService.updateLoginId(id, CreateLoginDTO);
  }

  @Delete('/delete/:id')
  async delete(@Param('id')id: string): Promise<{messege:string}>{
    await this.loginService.deleteLoginId(id);
    return { messege: 'login successfully deleted'};
  }

}
