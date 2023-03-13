import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { method, body } = req;
        console.log(req.body);
        if (method === 'PUT') {
            const uuid = req.params.uuid;
            console.log('UUID:', uuid);
          }
        next();
    }
    
 }