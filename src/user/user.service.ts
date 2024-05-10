import { Injectable } from '@nestjs/common'
import { RegisterDTO } from './dto/register.dto'

@Injectable()
export class UserService {
  constructor() {}
  register(data: RegisterDTO) {
    console.log(data)

    return 'register'
  }
  login() {
    return 'login'
  }
}
