import { User } from '../../entities/User';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { CreateUserService } from './CreateUserService';

describe('Create User', () => {
  let usersReposisoty: IUsersRepository;
  let usersService: CreateUserService;

  beforeAll(() => {
    usersReposisoty = new UsersRepositoryInMemory();
    usersService = new CreateUserService(usersReposisoty);
  });

  it('Should be able to create a new User', async () => {
    const newUser: User = {
      email: 'usertest@gmail.com',
      name: 'User Test',
      username: 'usertest',
    };

    const user = await usersService.execute(newUser);

    expect(user).toHaveProperty('id');
    expect(user.username).toBe('sostenesg7');
  });

  it('Should not be able to create a new User', async () => {
    const newUser: User = {
      email: 'userexisting@gmail.com',
      name: 'User Existing',
      username: 'userexisting',
    };

    const user = await usersService.execute(newUser);
    expect(usersService.execute(user)).rejects.toEqual(
      new Error('User already exists!')
    );
  });
});
