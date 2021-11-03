import { Router } from 'express';
import CreateUserFactory from '../modules/createUser/CreateUserFactort';

const UsersRouter = Router();

UsersRouter.post('/', (req, res, next) => {
  CreateUserFactory().handle(req, res, next);
});

export { UsersRouter };
