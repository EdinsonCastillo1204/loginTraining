import { Prop,Schema,SchemaFactory } from '@nestjs/mongoose';
import { Document }from 'mongoose'

export type LoginDocument= Login & Document;

@Schema()
export class Login {
  @Prop({ type: String, required: true }) // Corregido "requered" a "required"
  name: string;

  @Prop({ type: String }) // Especifica el tipo para consistencia
  lastName: string;

  @Prop({ type: String }) // Especifica el tipo para consistencia
  userName: string;

  @Prop({ type: Number }) // Especifica el tipo para consistencia
  password: number;

 
}
export const LoginSchema =SchemaFactory.createForClass(Login);