import { container } from 'tsyringe';

import { StocksServiceImpl } from '@modules/stocks/services/impl/StocksServiceImpl';
import { StocksService } from '@modules/stocks/services/StocksService';
import { IbovespaServiceImpl } from '@modules/ibovespa/services/impl/IBovespaServiceImpl';
import { IbovespaService } from '@modules/ibovespa/services/IBovespaService';

container.registerSingleton<StocksService>(
  'StocksService',  StocksServiceImpl,
);

container.registerSingleton<IbovespaService>(
  'IbovespaService',  IbovespaServiceImpl,
);
