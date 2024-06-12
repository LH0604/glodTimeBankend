/*
 *@Author: liaoshh
 *@CreateDate: 2024-06-11
 *@Description: 处理dto的报错信息，采用统一的格式
 */
import { HttpException, HttpStatus, ValidationError, ValidationPipe } from '@nestjs/common'

export default class Validate extends ValidationPipe {
  constructor() {
    super()
  }
  protected flattenValidationErrors(validationErrors: ValidationError[]): string[] {
    const error: Record<string, any> = {}
    validationErrors.forEach((item) => {
      error[item.property] = Object.values(item.constraints)[0]
    })
    throw new HttpException(
      {
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        message: error,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    )
  }
}
