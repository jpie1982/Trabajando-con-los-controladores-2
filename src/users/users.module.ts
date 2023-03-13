import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UserService } from './services/user.service';
import { UserMiddleware } from './middleware/user.middleware';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(UserMiddleware)
      .forRoutes('user', ':uuid')
  }
}
