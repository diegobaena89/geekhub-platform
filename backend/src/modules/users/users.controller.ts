import { Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async createUser(body: any) {
    const novoRegistro = await this.usersService.createUser(body);
    return { message: 'Registro criado com sucesso', data: novoRegistro };
  }

  // TODO
  // @Post para criar usuario
  // @Put para atualizar usuario
  // @Delete para deletar usuario
  // testar com o insomnia
}
