import express from 'express';

import Controller from './controllers/Controller.js';

const routes = express.Router();
const controller = new Controller();

routes.get('/books', controller.getBooks);

export default routes;