import { inject, injectable } from 'tsyringe';
import { StocksService } from './services/StocksService';

@injectable()
export class StocksUseCase {
  constructor(
    @inject('StocksService')
    private stocksService: StocksService) { }

  async execute(symbols: string) {
    return await this.stocksService.getStock(symbols);
  }
}
