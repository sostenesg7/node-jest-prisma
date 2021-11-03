import { Router } from 'express';
import CreateUserFactory from '../modules/createUser/CreateUserFactort';

const UsersRouter = Router();

UsersRouter.post('/', (req, res) => {
  CreateUserFactory().handle(req, res);
});

export { UsersRouter };
