import { Router } from 'express';

import stocksRouter from '@modules/stocks/routes/stocks.routes';

const routes = Router();

routes.use('/stocks', stocksRouter);

export default routes;
