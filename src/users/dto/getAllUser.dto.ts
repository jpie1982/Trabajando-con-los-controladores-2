import {
    IsString,
      IsNotEmpty,
    IsEmail,
  } from 'class-validator';
  import { UserInterface } from '../Interface/user.interface';

  export class GetAllUserDto implements UserInterface{
    @IsString()  
    uuid: string;

      @IsNotEmpty()
      @IsString()
      name: string;

      @IsNotEmpty()
      @IsString()
      lastName: string;

      @IsNotEmpty()
      @IsEmail()
      email: string;
    
  }