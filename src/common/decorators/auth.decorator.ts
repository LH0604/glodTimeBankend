import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ROLE } from '../role'

export function Auth(...roles: ROLE[]) {
  //   return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard('jwt'), RoleGuard))
  return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard('jwt')))
}
