import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';
import { prisma } from '../../database/client';

class UsersRepositoryPrisma implements IUsersRepository {
  async create({ email, name, username }: User): Promise<User> {
    const user = await prisma.user.create({
      data: { email, name, username },
    });
    return user;
  }

  async exists(username: string): Promise<boolean> {
    const exists = await prisma.user.findFirst({
      where: { username },
    });
    return Boolean(exists);
  }
}

export { UsersRepositoryPrisma };
