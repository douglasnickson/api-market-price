import { Router } from 'express';

import { IbovespaController } from '@modules/ibovespa/controllers/IbovespaController';

const ibovespaRouter = Router();
const ibovespaController = new IbovespaController();

ibovespaRouter.get('/search', ibovespaController.getTicket);

export default ibovespaRouter;
