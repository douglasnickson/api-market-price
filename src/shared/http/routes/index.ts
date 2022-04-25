import { Router } from 'express';

import stocksRouter from '@modules/stocks/routes/stocks.routes';
import ibovespaRouter from '@modules/ibovespa/routes/ibovespa.routes';

const routes = Router();

routes.use('/stocks', stocksRouter);
routes.use('/ibovespa', ibovespaRouter);

export default routes;
