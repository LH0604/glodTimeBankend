import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma.module'
import { TaskModule } from './task/task.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      /* 全局模块，自动加载.env文件中的内容 */
      isGlobal: true,
    }),
    UserModule,
    PrismaModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
