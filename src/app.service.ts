import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/register.dto';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  getHello(): string {
    return 'Hello World!';
  }

  helloService(): string {
    return 'Hello Service!';
  }

  async register(body: RegisterDto) {
    try{
      const hash = await bcrypt.hash(body.password, 10);
      const createdUser = new this.userModel({...body, password: hash});
      await createdUser.save();
      return { success: true, message: 'User registered successfully', data: createdUser };
    } catch(error){
      return { success: false, message: 'User registration failed', error: error.message };
    }
  }

  async login(body: LoginDto) {
    try{
      const {email, password} = body;
      const user = await this.userModel.findOne({ email });

      if(!user){
        return { success: false, message: 'user Not found' };
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if(!isMatch){
        return { success: false, message: 'Invalid credentials' };
      }

      return { success: true, message: 'User login successfully', data: user };
    } catch(error){
      return { success: false, message: 'User login failed', error: error.message };
    }
  }
}
