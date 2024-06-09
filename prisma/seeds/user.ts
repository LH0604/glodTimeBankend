import { Random } from 'mockjs'
import create from '../helper'
import { hash } from 'argon2'
export default function userSeed() {
  create(10, async (prisma) => {
    await prisma.user.create({
      data: {
        nickname: Random.name(),
        password: await hash('123'),
        account: Random.email(),
      },
    })
  })
  create(1, async (prisma) => {
    await prisma.user.create({
      data: {
        nickname: 'test',
        password: await hash('123'),
        account: 'test',
      },
    })
  })
}
