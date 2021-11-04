import { NextFunction, Request, Response } from 'express';
import { User } from '../../entities/User';
import { CreateUserService } from './CreateUserService';

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(
    req: Request<any, any, User>,
    res: Response,
    next: NextFunction
  ) {
    const { email, name, username } = req.body;

    try {
      const user = await this.createUserService.execute({
        email,
        name,
        username,
      });

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export { CreateUserController };
