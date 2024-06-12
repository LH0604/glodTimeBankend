import { BadRequestException, Injectable } from '@nestjs/common'
import { LoginDTO } from './dto/login.dto'
import { RegisterDTO } from './dto/register.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { hash, verify } from 'argon2'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async register(data: RegisterDTO) {
    const user = await this.prisma.user.create({
      data: {
        account: data.account,
        password: await hash(data.password),
      },
    })
    return user
  }
  async login(data: LoginDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        account: data.account,
      },
    })
    const flag = !(await verify(user.password, data.password))
    if (flag) {
      throw new BadRequestException('密码错误')
    }
    return user
  }
}
