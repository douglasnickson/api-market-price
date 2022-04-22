import { container } from 'tsyringe';

import { StocksServiceImpl } from '@modules/stocks/services/impl/StocksServiceImpl';
import { StocksService } from '@modules/stocks/services/StocksService';

container.registerSingleton<StocksService>(
  'StocksService',  StocksServiceImpl,
);
