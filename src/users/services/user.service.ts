import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from '../dto/create-user.dto';
import { GetAllUserDto } from '../dto/getAllUser.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserInterface } from '../Interface/user.interface';
import { PutUserDto } from '../dto/putUser.dto';
import { PatchUserDto } from '../dto/patchUser.dto';
import { PostUserDto } from '../dto/postUser.dto';
@Injectable()
export class UserService {
   users: UserInterface[] = [
    {
      uuid: uuid(),
      name: 'Juan',
      lastName: 'iturbide',
      email: 'jpie1982@gmail.com',
    },
    {
      uuid: uuid(),
      name: 'Maria',
      lastName: 'Perez',
      email: 'mariaperez@gmail.com',
    },
    {
      uuid: uuid(),
      name: 'Pablo',
      lastName: 'Elhordoy',
      email: 'pabloelhordoy@gmail.com',
    },
  ];


  //GET
  //  Retorna todos los usuarios
  getAllUsers(): GetAllUserDto[] {
    return this.users;
  }


  //  Retorna solo el usuario deseado
  getOneUser(uuid: string) {
    const user1 = this.users.find(user => user.uuid === uuid);
    if (!user1) throw new HttpException("no existe el usuario buscado", HttpStatus.NOT_FOUND);
        return user1
  }


//POST
  createUser(usuario: PostUserDto) {
    this.users.push(usuario);
    return usuario;
  }



//--------

//Put
updateUser(uuid: string, updateUserDto: PutUserDto) {
  const userToUpdate = this.users.find(user => user.uuid === uuid);
  if (!userToUpdate) {
    return 'El usuario no existe';
  }
  const updatedUser = { ...userToUpdate, ...updateUserDto };
  this.users = this.users.map(user => (user.uuid === uuid ? updatedUser : user));
  return updatedUser;
}




//PATCH
modificarUser(uuid: string, updateUserDto: PatchUserDto) {
  const userToUpdate = this.users.find((user) => user.uuid === uuid);
  if (!userToUpdate) throw new HttpException("esta id no existe", HttpStatus.NOT_FOUND)
  {
    const updatedUser = { ...userToUpdate, ...updateUserDto };
    this.users = this.users.map((user) => (user.uuid === uuid ? updatedUser : user));
    return updatedUser;
   
  }
 
}

//DELETE
deleteUser( uuid: string )   {
  this.users = this.users.filter(id => id.uuid != uuid)
  return `Usuario de uuid: ${uuid},Eliminado.`;
  }
  
}
