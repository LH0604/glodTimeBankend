import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import Validate from './common/validate'
import { TransformInterceptor } from './transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false })
  app.useGlobalPipes(new Validate())
  // 配置全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  // 配置全局路由前缀
  app.setGlobalPrefix('api')
  await app.listen(3000)
}
bootstrap()
