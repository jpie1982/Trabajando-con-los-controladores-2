"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const postUser_dto_1 = require("../dto/postUser.dto");
const putUser_dto_1 = require("../dto/putUser.dto");
const patchUser_dto_1 = require("../dto/patchUser.dto");
const interceptor_1 = require("../../interceptors/interceptor");
const Guard_1 = require("../../guards/Guard");
let UsersController = class UsersController {
    constructor(service) {
        this.service = service;
    }
    getAllUsers() {
        return this.service.getAllUsers();
    }
    getOneUser(uuid) {
        return this.service.getOneUser(uuid);
    }
    createUser(usuario) {
        console.log(`Usuario fue creado ${usuario}.`);
        return this.service.createUser(usuario);
    }
    updateUser(uuid, updateUserDto) {
        return this.service.updateUser(uuid, updateUserDto);
    }
    modificarUser(uuid, updateUserDto) {
        return this.service.modificarUser(uuid, updateUserDto);
    }
    deleteUser(uuid) {
        return this.service.deleteUser(uuid);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getOneUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(Guard_1.Guard),
    (0, common_1.UseInterceptors)(interceptor_1.Interceptor),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postUser_dto_1.PostUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)(':uuid'),
    __param(0, (0, common_1.Param)('uuid', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, putUser_dto_1.PutUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Patch)(':uuid'),
    __param(0, (0, common_1.Param)('uuid', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, patchUser_dto_1.PatchUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "modificarUser", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map