import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  image: string;

  @Prop()
  hobbies: Array<string>;

  @Prop()
  gender: string;

  @Prop()
  skills: Array<string>;
}

export const UserSchema = SchemaFactory.createForClass(User);