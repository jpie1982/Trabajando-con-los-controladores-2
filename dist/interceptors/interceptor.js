"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interceptor = void 0;
const rxjs_1 = require("rxjs");
class Interceptor {
    intercept(context, next) {
        return next
            .handle()
            .pipe((0, rxjs_1.map)((user) => {
            if (!user.hasOwnProperty('lastname')) {
                user.lastName = 'null';
            }
            return user;
        }));
    }
}
exports.Interceptor = Interceptor;
//# sourceMappingURL=interceptor.js.map