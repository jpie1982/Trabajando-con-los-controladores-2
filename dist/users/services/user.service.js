"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UserService = class UserService {
    constructor() {
        this.users = [
            {
                uuid: (0, uuid_1.v4)(),
                name: 'Juan',
                lastName: 'iturbide',
                email: 'jpie1982@gmail.com',
            },
            {
                uuid: (0, uuid_1.v4)(),
                name: 'Maria',
                lastName: 'Perez',
                email: 'mariaperez@gmail.com',
            },
            {
                uuid: (0, uuid_1.v4)(),
                name: 'Pablo',
                lastName: 'Elhordoy',
                email: 'pabloelhordoy@gmail.com',
            },
        ];
    }
    getAllUsers() {
        return this.users;
    }
    getOneUser(uuid) {
        const user1 = this.users.find(user => user.uuid === uuid);
        if (!user1)
            throw new common_1.HttpException("no existe el usuario buscado", common_1.HttpStatus.NOT_FOUND);
        return user1;
    }
    createUser(usuario) {
        this.users.push(usuario);
        return usuario;
    }
    updateUser(uuid, updateUserDto) {
        const userToUpdate = this.users.find(user => user.uuid === uuid);
        if (!userToUpdate) {
            return 'El usuario no existe';
        }
        const updatedUser = Object.assign(Object.assign({}, userToUpdate), updateUserDto);
        this.users = this.users.map(user => (user.uuid === uuid ? updatedUser : user));
        return updatedUser;
    }
    modificarUser(uuid, updateUserDto) {
        const userToUpdate = this.users.find((user) => user.uuid === uuid);
        if (!userToUpdate)
            throw new common_1.HttpException("esta id no existe", common_1.HttpStatus.NOT_FOUND);
        {
            const updatedUser = Object.assign(Object.assign({}, userToUpdate), updateUserDto);
            this.users = this.users.map((user) => (user.uuid === uuid ? updatedUser : user));
            return updatedUser;
        }
    }
    deleteUser(uuid) {
        this.users = this.users.filter(id => id.uuid != uuid);
        return `Usuario de uuid: ${uuid},Eliminado.`;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map