
import { IsEmail, IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { UserInterface } from '../Interface/user.interface'
import { v4 as uuid } from 'uuid';

export class PostUserDto implements UserInterface {
     uuid: string = uuid()
    @IsNotEmpty({message: 'Campo vacio, no puede ser un campo vacio '})
    @IsString({message: ' Tiene que ser un string'})
    name: string;
    @IsNotEmpty({message: 'Campo vacio, no puede ser un campo vacio '})
    @IsString({message: ' Tiene que ser un string'})
    lastName: string;
    @IsNotEmpty({message: 'Campo vacio, no puede ser un campo vacio'})
    @IsEmail()
    email: string;
    
}