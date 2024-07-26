import { UserInterface } from './user.interfece';
import { ApiProperty } from '@nestjs/swagger';

export class AuthUserDTO implements UserInterface {
  @ApiProperty({
    description: 'nombre de usuario',
    example: 'DiegoA',
  })
  readonly userName?: string;

  @ApiProperty({
    description: 'email del usuario',
    example: 'axlyeyo2000@gmail.com',
  })
  readonly email?: string;

  @ApiProperty({
    description: 'contraseña encriptado del usuario',
    example: 'jsjfdklsjclkmsdjcniwnewr',
  })
  readonly password?: string;
}
