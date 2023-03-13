import { UserInterface } from '../Interface/user.interface';
export declare class CreateUserDto implements UserInterface {
    uuid: string;
    name: string;
    lastName: string;
    email: string;
}
