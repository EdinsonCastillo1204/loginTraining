import { UserInterface } from './user.interfece';

export class AuthUserDTO implements UserInterface {
  readonly userName?: string;
  readonly email?: string;
  readonly password?: string;
}
