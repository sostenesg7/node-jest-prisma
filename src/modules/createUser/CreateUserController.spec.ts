import app from '../../app';
import request from 'supertest';
import { User } from '../../entities/User';
import { prisma } from '../../database/client';

// jest.setTimeout(30 * 1000);

describe('Create User Controller', () => {
  beforeEach(async () => {
    await prisma.user.deleteMany({ where: {} });
  });

  it('Should be able to create a new user', async () => {
    const newUser: User = {
      email: 'userintegration@mail.com',
      name: 'User Integration',
      username: 'userintegration',
    };

    const response = await request(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should not be able to create a new user', async () => {
    const newUser: User = {
      email: 'userexisting@mail.com',
      name: 'User Existing',
      username: 'userexisting',
    };

    await request(app).post('/users').send(newUser);
    const response = await request(app).post('/users').send(newUser);

    expect(response.status).toBe(400);
  });
});
