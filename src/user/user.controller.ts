import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { RegisterDTO } from './dto/register.dto'

@Controller('account')
export class UserController {
  constructor(private readonly user: UserService) {}

  @Post('register')
  register(@Body() body: RegisterDTO) {
    return this.user.register(body)
  }
  @Post('login')
  login() {
    return this.user.login()
  }
}
