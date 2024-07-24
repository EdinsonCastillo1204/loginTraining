import { Controller, Post, Body } from '@nestjs/common';
import { AuthUserDTO } from './user.dto';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class LoginController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('/login')
  async createPost(@Body() user: AuthUserDTO) {
    
      const userFound = await this.userService.Auth(user);

      console.log(userFound)
      console.log(user)
/*
      if (user && await bcrypt.compare(user.password, userFound.password)) {
        const { password, ...result } = user;
        console.log(result)
      }

      return userFound;*/
 
  }
}
