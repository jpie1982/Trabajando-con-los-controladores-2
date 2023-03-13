import { GetAllUserDto } from '../dto/getAllUser.dto';
import { UserInterface } from '../Interface/user.interface';
import { PutUserDto } from '../dto/putUser.dto';
import { PatchUserDto } from '../dto/patchUser.dto';
import { PostUserDto } from '../dto/postUser.dto';
export declare class UserService {
    users: UserInterface[];
    getAllUsers(): GetAllUserDto[];
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
