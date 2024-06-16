import { Auth } from '@/common/decorators/auth.decorator'
import { Controller, Get } from '@nestjs/common'
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  @Auth()
  findAll() {
    return this.taskService.findAll()
  }
}
