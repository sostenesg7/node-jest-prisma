class User {
  id?: string;
  name!: string;
  username!: string;
  email!: string;

  constructor({ name, username, email }: User) {
    Object.assign(this, { name, username, email });
  }

  static create({ name, username, email }: User) {
    return new User({ name, username, email });
  }
}

export { User };
