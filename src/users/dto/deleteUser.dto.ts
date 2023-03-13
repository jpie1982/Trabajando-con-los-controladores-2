import {
    IsString,
      IsNotEmpty,
    IsEmail,
    IsOptional,
  } from 'class-validator';
  import { UserInterface } from '../Interface/user.interface';

  export class DeletedUserDto implements UserInterface{
    @IsString()
    @IsOptional()
    uuid: string;

      @IsNotEmpty()
      @IsString()
      @IsOptional()
      name: string;

      @IsNotEmpty()
      @IsString()
      @IsOptional()
      lastName: string;

      @IsNotEmpty()
      @IsEmail()
      @IsOptional()
      email: string;
    
  }