import { Injectable } from '@nestjs/common'; 

@Injectable()
export class UsersService {
  private readonly users: any = {
    id: 1,
    name: "Diego",
    email: "diegodograu@gmail.com"
  }
  getAllUsers(): any[] {
    return [
      { id: 1, name: 'John Doe', email: 'jhondoe@gmail.com' },
      { id: 2, name: 'Alice Caeiro', email: 'alicecaeiro@hotmail.com' },
    ];
  }

  getUserById(id: number): any {
    return { id: 1, name: 'John Doe', email: 'jhondoe@gmail.com' };
  }

  createUser(user: any[]) {
    const newUser = {
      ...user,
    }
    this.users.push(newUser)
    
    return newUser;
  }

}

