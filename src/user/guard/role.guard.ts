import { ROLE } from '@/common/role'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest().user
    console.log(user, 'user')
    const roles = this.reflector.getAllAndMerge<ROLE[]>('roles', [context.getHandler(), context.getClass()])
    console.log(roles, 'roles')

    return roles.length ? roles.some((role) => user.role == role) : true
  }
}
