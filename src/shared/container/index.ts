import { container } from 'tsyringe';

import { StocksServiceImpl } from '@modules/stocks/services/impl/StocksServiceImpl';
import { StocksService } from '@modules/stocks/services/StocksService';
import { IbovespaServiceImpl } from '@modules/ibovespa/services/impl/IbovespaServiceImpl';
import { IbovespaService } from '@modules/ibovespa/services/IbovespaService';
import { CryptoService } from '@modules/crypto/services/CryptoService';
import { CryptoServiceImpl } from '@modules/crypto/services/impl/CryptoServiceImpl';

container.registerSingleton<StocksService>(
  'StocksService',  StocksServiceImpl,
);

container.registerSingleton<IbovespaService>(
  'IbovespaService',  IbovespaServiceImpl,
);

container.registerSingleton<CryptoService>(
  'CryptoService',  CryptoServiceImpl,
)
