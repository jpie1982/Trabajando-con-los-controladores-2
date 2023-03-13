// USO para tranferir datos CON APP
import { v4 as uuid } from 'uuid';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserInterface } from '../Interface/user.interface';

export class CreateUserDto implements UserInterface {
  uuid: string = uuid();
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  lastName: string;
  @IsEmail()
  email: string;
}
