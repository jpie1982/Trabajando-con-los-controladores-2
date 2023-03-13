import {
    IsString,
      IsNotEmpty,
    IsEmail,
    IsOptional,
  } from 'class-validator';
  import { UserInterface } from '../Interface/user.interface';

  export class PutUserDto implements UserInterface{
    @IsString()
    @IsOptional()
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