"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
const common_1 = require("@nestjs/common");
let Guard = class Guard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new common_1.UnauthorizedException('Authorization header missing');
        }
        const [bearer, token] = authHeader.split(' ');
        if (bearer !== 'Bearer') {
            throw new common_1.UnauthorizedException('Invalid authorization header format');
        }
        const isValid = token ===
            '99e4c497d8b4c049ce41e71ff04055adc01714bccdf2f901e4c1d16ffabcef571398fa2b416ddc1037a98c4040c2f277c1bbb2dbc647ed65a2acaf657ac229ec';
        if (!isValid) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
        return true;
    }
};
Guard = __decorate([
    (0, common_1.Injectable)()
], Guard);
exports.Guard = Guard;
//# sourceMappingURL=Guard.js.map