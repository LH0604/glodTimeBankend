import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { RegisterDTO } from './dto/register.dto'
import { LoginDTO } from './dto/login.dto'

@Controller('account')
export class UserController {
  constructor(private readonly user: UserService) {}

  @Post('register')
  register(@Body() body: RegisterDTO) {
    return this.user.register(body)
  }
  @Post('login')
  login(@Body() body: LoginDTO) {
    return this.user.login(body)
  }
}
