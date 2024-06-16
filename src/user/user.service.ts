import { BadRequestException, Injectable } from '@nestjs/common'
import { LoginDTO } from './dto/login.dto'
import { RegisterDTO } from './dto/register.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { hash, verify } from 'argon2'
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}
  async register(data: RegisterDTO) {
    const user = await this.prisma.user.create({
      data: {
        account: data.account,
        password: await hash(data.password),
      },
    })
    return this.token(user)
  }
  async login(data: LoginDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        account: data.account,
      },
    })
    const flag = !(await verify(user.password, data.password))
    if (flag) {
      throw new BadRequestException({ code: 400, message: '密码错误' })
    }
    return this.token(user)
  }
  async token(user: Record<string, any>) {
    const res = await this.jwt.signAsync({ account: user.account, id: user.id })
    return { token: res }
  }
}
