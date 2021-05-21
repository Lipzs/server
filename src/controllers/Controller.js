import { json } from 'express';
import db from '../database/knex.js';

export default class Controller {
  async getBooks(req, res) {
    const table = await db('book')
      .select('title', 'year', 'price')
    
      
    console.log(JSON.parse(table));
  }
}