import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './main/app.controller';
import { AppService } from './main/app.service';
import { UserModule } from './users/users.module';
import { UsersController } from './users/controller/users.controller';
import { UserService } from './users/services/user.service';
import { UserMiddleware } from './users/middleware/user.middleware';


@Module({
  controllers: [
    AppController,
    UsersController,
  ],
  providers: [AppService, UserService,],
  imports: [UserModule],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer  .apply(UserMiddleware) .forRoutes('*');
  }

}
