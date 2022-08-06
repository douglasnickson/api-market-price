import { Router } from 'express';

import stocksRouter from '@modules/stocks/routes/stocks.routes';
import ibovespaRouter from '@modules/ibovespa/routes/ibovespa.routes';
import cryptoRouter from '@modules/crypto/routes/crypto.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'API Running...' });
});
routes.use('/stocks', stocksRouter);
routes.use('/ibovespa', ibovespaRouter);
routes.use('/crypto', cryptoRouter);

export default routes;
