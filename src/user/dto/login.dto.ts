import { IsExists } from '@/common/rules/is-exists.rule'
import { IsNotEmpty } from 'class-validator'
export class LoginDTO {
  @IsNotEmpty({ message: '账户不能为空' })
  @IsExists('user', { message: '用户名不存在' })
  account: string
  @IsNotEmpty({ message: '密码不能为空' })
  password: string
}
