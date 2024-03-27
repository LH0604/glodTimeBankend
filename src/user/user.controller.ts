import { Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}
  @Get('list')
  getUser() {
    return 'user'
  }
  @Post('register')
  register() {
    return this.user.register()
  }
  @Post('login')
  login() {
    return this.user.login()
  }
}
