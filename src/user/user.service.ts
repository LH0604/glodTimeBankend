import { BadRequestException, Injectable } from '@nestjs/common'
import { LoginDTO } from './dto/login.dto'
import { RegisterDTO } from './dto/register.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { verify } from 'argon2'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  register(data: RegisterDTO) {
    console.log(data)

    return 'register'
  }
  async login(data: LoginDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        account: data.account,
      },
    })
    const flag = !(await verify(user.password, data.password))
    if (flag) {
      throw new BadRequestException()
    }
    return user
  }
}
