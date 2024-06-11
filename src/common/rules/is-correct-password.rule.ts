import { PrismaClient } from '@prisma/client'
import { verify } from 'argon2'
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'
export function IsCorrectPassword(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsCorrectPassword',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          const prisma = new PrismaClient()
          const user = await prisma.user.findUnique({
            where: {
              account: args.object['account'],
            },
          })
          const bool = await verify(user.password, value)
          return bool
        },
      },
    })
  }
}
