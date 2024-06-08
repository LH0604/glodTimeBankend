import { Injectable } from '@nestjs/common'
import { LoginDTO } from './dto/login.dto'
import { RegisterDTO } from './dto/register.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  register(data: RegisterDTO) {
    console.log(data)

    return 'register'
  }
  login(data: LoginDTO) {
    console.log(data)
    return 'login'
  }
}
