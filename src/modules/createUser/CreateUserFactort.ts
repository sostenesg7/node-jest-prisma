import { InMemoryUsersRepositories } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserController } from './CreateUserController';
import { CreateUserService } from './CreateUserService';

const CreateUserFactory = () => {
  const usersRepository = new InMemoryUsersRepositories();
  const createUserService = new CreateUserService(usersRepository);
  const createUserController = new CreateUserController(createUserService);
  return createUserController;
};

export default CreateUserFactory;
