import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          //设置加密使用的 secret
          secret: config.get('TOKEN_SECRET'),
          //过期时间
          signOptions: { expiresIn: '300d' },
        }
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
