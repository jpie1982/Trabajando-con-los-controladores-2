import { UserService } from '../services/user.service';
import { UserInterface } from '../Interface/user.interface';
import { PostUserDto } from '../dto/postUser.dto';
import { PutUserDto } from '../dto/putUser.dto';
import { PatchUserDto } from '../dto/patchUser.dto';
export declare class UsersController {
    private readonly service;
    constructor(service: UserService);
    getAllUsers(): UserInterface[];
    getOneUser(uuid: string): UserInterface;
    createUser(usuario: PostUserDto): PostUserDto;
    updateUser(uuid: string, updateUserDto: PutUserDto): "El usuario no existe" | {
        uuid: string;
        name: string;
        lastName: string;
        email: string;
    };
    modificarUser(uuid: string, updateUserDto: PatchUserDto): {
        uuid: string;
        name: string;
        lastName: string;
        email: string;
    };
    deleteUser(uuid: string): string;
}
