import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  constructor() {}
  register() {
    return 'register'
  }
  login() {
    return 'login'
  }
}
