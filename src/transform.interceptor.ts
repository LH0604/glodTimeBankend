/*
 *@Author: liaoshh
 *@CreateDate: 2024-06-12
 *@Description: 统一处理响应数据格式的拦截器
 */
import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common'
import { map } from 'rxjs/operators'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    // console.log('拦截器前')
    // const request = context.switchToHttp().getRequest() as Request
    // const startTime = Date.now()
    return next.handle().pipe(
      map((data) => {
        // console.log(data, 'data')
        // const endTime = Date.now()
        // new Logger().log(`TIME:${endTime - startTime}\tURL:${request.path}\tMETHOD:${request.method}`)
        return { code: HttpStatus.OK, data, message: 'success' }
      }),
    )
  }
}
