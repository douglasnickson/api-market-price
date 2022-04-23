import AppError from '@shared/http/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { StocksService } from './services/StocksService';

@injectable()
export class StocksUseCase {
  constructor(
    @inject('StocksService')
    private stocksService: StocksService) { }

  async execute(symbols: string) {
    try {
      const stocks = await this.stocksService.getStock(symbols);
      return stocks;
    } catch (err: any) {
      throw new AppError('There was an error while fetching the stock data.', err.response.status);
    }
  }
}
