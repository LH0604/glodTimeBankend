import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false })
  app.useGlobalPipes(new ValidationPipe())
  // 配置全局路由前缀
  app.setGlobalPrefix('api')
  await app.listen(3000)
}
bootstrap()
