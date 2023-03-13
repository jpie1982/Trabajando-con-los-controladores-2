import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class Guard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
