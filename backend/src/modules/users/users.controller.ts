import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): any[] {
    return this.usersService.getAllUsers();
  }

  @Get('/:id')
  getUserById(id: number): any {
    return this.usersService.getUserById(id);
  }

  // TODO
  // @Post para criar usuario
  // @Put para atualizar usuario
  // @Delete para deletar usuario
}
