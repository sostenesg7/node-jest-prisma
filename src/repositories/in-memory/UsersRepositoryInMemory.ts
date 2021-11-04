import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';
import { v4 as uuid } from 'uuid';

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    const newUser = { ...user, id: uuid() };

    this.users.push(newUser);
    return newUser;
  }

  async exists(username: string): Promise<boolean> {
    return this.users.some((user) => user.username === username);
  }
}

export { UsersRepositoryInMemory };
