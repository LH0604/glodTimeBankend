import { IsNotExists } from '@/common/rules/is-not-exists.rule'
import { IsNotEmpty } from 'class-validator'
export class RegisterDTO {
  nickname?: string
  @IsNotEmpty({ message: '账户不能为空' })
  @IsNotExists('user', { message: '账户已存在' })
  account: string
  @IsNotEmpty({ message: '密码不能为空' })
  password: string
  @IsNotEmpty({ message: '确认密码不能为空' })
  confirm_password: string
}
