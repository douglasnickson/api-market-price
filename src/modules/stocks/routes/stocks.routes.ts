import { Router } from 'express';

import { StocksController } from '@modules/stocks/controllers/StocksController';

const stocksRouter = Router();
const stocksController = new StocksController();

stocksRouter.get('/search', stocksController.getStock);

export default stocksRouter;
