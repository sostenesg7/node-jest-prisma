const NodeEnvironment = require('jest-environment-node');
const { v4: uuid } = require('uuid');
const { execSync } = require('child_process');
const { resolve } = require('path');
const prismaCLI = './node_modules/.bin/prisma';
const { Client } = require('pg');

require('dotenv').config({ path: resolve(__dirname, '..', '.env.test') });
const DATABASE_URL = process.env.DATABASE_URL;

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
    this.schema = `test_schema_${uuid()}`;
    this.connectionString = `${DATABASE_URL}${this.schema}`;

  }

  setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;
    execSync(`${prismaCLI} migrate dev`);
  }

  async teardown() {
    const client = new Client(this.connectionString);
    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);
    await client.end();
  }
}

module.exports = CustomEnvironment