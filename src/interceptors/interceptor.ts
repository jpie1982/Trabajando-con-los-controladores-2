
import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { PostUserDto } from "../users/dto/postUser.dto";


export class Interceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
        .handle()
        .pipe(map((user: PostUserDto) => {
          if(!user.hasOwnProperty('lastname')){
              user.lastName = 'null';
          }
          return user; 
          }
      )
     
    );
    }
    }