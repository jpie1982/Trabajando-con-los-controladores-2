"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./main/app.controller");
const app_service_1 = require("./main/app.service");
const users_module_1 = require("./users/users.module");
const users_controller_1 = require("./users/controller/users.controller");
const user_service_1 = require("./users/services/user.service");
const user_middleware_1 = require("./users/middleware/user.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(user_middleware_1.UserMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            app_controller_1.AppController,
            users_controller_1.UsersController,
        ],
        providers: [app_service_1.AppService, user_service_1.UserService,],
        imports: [users_module_1.UserModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map