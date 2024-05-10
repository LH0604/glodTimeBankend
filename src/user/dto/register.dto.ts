import { IsNotEmpty } from 'class-validator'
export class RegisterDTO {
  nickname?: string
  @IsNotEmpty({ message: '账户不能为空' })
  account: string
  password: string
  password_config: string
}
