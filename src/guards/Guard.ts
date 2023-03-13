import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class Guard implements CanActivate {
canActivate(context: ExecutionContext): boolean {
const request = context.switchToHttp().getRequest();
const authHeader = request.headers.authorization;
if (!authHeader) {
    throw new UnauthorizedException('Authorization header missing');
  }
  
  const [bearer, token] = authHeader.split(' ');
  
  if (bearer !== 'Bearer') {
    throw new UnauthorizedException('Invalid authorization header format');
  }
  
  // validar el token aquí
  const isValid =
    token ===
    '99e4c497d8b4c049ce41e71ff04055adc01714bccdf2f901e4c1d16ffabcef571398fa2b416ddc1037a98c4040c2f277c1bbb2dbc647ed65a2acaf657ac229ec';
  
  if (!isValid) {
    throw new UnauthorizedException('Invalid token');
  }
  
  return true;
 } 
}  