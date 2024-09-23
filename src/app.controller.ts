import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto, RegisterDto } from './dto/register.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Render('index')
  @Get()
  getHello(): any {
    return { message: 'Hello World!' };
    //return this.appService.getHello();
  }

  @Get('hello')
  helloService(): string {
    return this.appService.helloService();
  }

  @Get('register')
  @Render('register')
  registerPage() {
    return { message: 'Register Page' };
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return await this.appService.register(body);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return await this.appService.login(body);
  }
}
