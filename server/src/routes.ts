import express, { request, response } from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';
const pointsController = new PointsController();

import ItemsController from './controllers/ItemsController';
const itemsController = new ItemsController();

const routes = express.Router();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);

export default routes;