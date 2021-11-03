import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IUserRequest {
  name: string;
  username: string;
  email: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, name, username }: IUserRequest) {
    const exists = await this.usersRepository.exists(username);

    if (exists) {
      throw new Error('User already exists!');
    }

    const userCreate = User.create({ email, name, username });
    const user = await this.usersRepository.create(userCreate);
    return user;
  }
}

export { CreateUserService };
