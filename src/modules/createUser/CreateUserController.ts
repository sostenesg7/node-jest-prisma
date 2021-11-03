import { Request, Response } from 'express';
import { User } from '../../entities/User';
import { CreateUserService } from './CreateUserService';

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request<any, any, User>, res: Response) {
    const { email, name, username } = req.body;
    const user = await this.createUserService.execute({
      email,
      name,
      username,
    });

    return res.json(user);
  }
}

export { CreateUserController };
