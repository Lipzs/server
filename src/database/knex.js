import knex from 'knex';
// import { config } from 'dotenv';

const db = knex({
  client: 'mysql2',
  connection: {
    host : 'localhost',
    user : 'senai_sads',
    password : 'filipe',
    database : 'sads_bookstore',
    port: '9090'
  }
});

export default db;