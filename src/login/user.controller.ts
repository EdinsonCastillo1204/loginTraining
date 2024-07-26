import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthUserDTO } from './user.dto';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger'; /*importo dedes swagger */

@ApiTags('auth') /*..*/
@Controller('auth')
export class LoginController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('/login')
  @ApiOperation({ summary: 'Iniciar sesión' })
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas' })
  async createPost(@Body() user: AuthUserDTO) {
    try {
      const userFound = await this.userService.Auth(user);

      if (user && (await bcrypt.compare(user.password, userFound.password))) {
        const { password, ...userValidated } = user;

        return { auth: this.jwtService.sign(Object.assign({}, userFound['_doc'])) };
      } else {
        throw new HttpException('user or password doesnt match', HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      console.log(error)

      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
