import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  userName: string;

  @Prop({ type: String })
  password: number;
}
export const UserSchema = SchemaFactory.createForClass(User);
