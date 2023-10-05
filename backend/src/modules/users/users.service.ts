import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAllUsers(): any[] {
    return [
      { id: 1, name: 'John Doe', email: 'jhondoe@gmail.com' },
      { id: 2, name: 'Alice Caeiro', email: 'alicecaeiro@hotmail.com' },
    ];
  }

  getUserById(id: number): any {
    return { id: 1, name: 'John Doe', email: 'jhondoe@gmail.com' };
  }
}
