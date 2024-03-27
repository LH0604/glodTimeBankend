import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      /* 全局模块，自动加载.env文件中的内容 */
      isGlobal: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
