import { Router } from 'express';

import { CryptoController } from '@modules/crypto/controllers/CryptoController';

const cryptoRouter = Router();
const cryptoController = new CryptoController();

cryptoRouter.get('/search', cryptoController.getCrypto);

export default cryptoRouter;
