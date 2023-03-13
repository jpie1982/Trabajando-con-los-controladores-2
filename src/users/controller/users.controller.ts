import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res, Patch, ParseArrayPipe, ParseIntPipe, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';
import { UserInterface } from '../Interface/user.interface';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PostUserDto } from '../dto/postUser.dto';
import { PutUserDto } from '../dto/putUser.dto';
import { PatchUserDto } from '../dto/patchUser.dto';
import { Interceptor } from 'src/interceptors/interceptor';
import { Guard } from 'src/guards/Guard';


@Controller('user')
export class UsersController {
  constructor(private readonly service: UserService) {}
  
  @Get() //Recupera datos datos total
  getAllUsers(): UserInterface[] {
    return this.service.getAllUsers();
  }
  @Get(':uuid')
  getOneUser(@Param('uuid') uuid: string ){
    return this.service.getOneUser(uuid);
    //👆convierte el string en un numero para poder comparar con el dato de user.interface 
  }

@Post()
@UseGuards(Guard)
@UseInterceptors(Interceptor)
@UsePipes(new ValidationPipe())
createUser(@Body() usuario: PostUserDto ) {
  console.log (`Usuario fue creado ${usuario}.`)
  return this.service.createUser(usuario);
}

@Put(':uuid')
updateUser(@Param('uuid', ParseIntPipe) uuid: string, @Body() updateUserDto: PutUserDto){
  return this.service.updateUser(uuid, updateUserDto);
 }

@Patch(':uuid')
modificarUser(@Param('uuid', ParseIntPipe) uuid: string, @Body() updateUserDto: PatchUserDto){
return this.service.modificarUser(uuid, updateUserDto);
}

//Borrar usuario

@Delete(':uuid')
deleteUser(@Param('uuid') uuid: string){
  return this.service.deleteUser(uuid)
}

}




