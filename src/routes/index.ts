import { Router } from 'express';
import { UsersRouter } from './UsersRouter';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({
    ready: true,
  });
});

routes.use('/users', UsersRouter);

export { routes };
