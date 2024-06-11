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
          console.log(args)
          return true
        },
      },
    })
  }
}
