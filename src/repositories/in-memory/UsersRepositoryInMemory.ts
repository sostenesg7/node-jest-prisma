import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';
import { v4 as uuid } from 'uuid';

class InMemoryUsersRepositories implements InMemoryUsersRepositories {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    Object.assign({}, user, { id: uuid() });

    this.users.push(user);
    return user;
  }

  async exists(username: string): Promise<boolean> {
    return this.users.some((user) => user.username === username);
  }
}

export { InMemoryUsersRepositories };
