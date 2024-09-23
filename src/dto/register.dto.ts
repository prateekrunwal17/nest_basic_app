import { IsEnum, IsNotEmpty } from "class-validator";

export class RegisterDto {
  @IsNotEmpty()  
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEnum(['admin', 'user'])
  role: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  image: string;

@IsNotEmpty()
hobbies: any;

  @IsEnum(['male', 'female'])
  gender: string;

  @IsNotEmpty()
  skills: any;
}


export class LoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}