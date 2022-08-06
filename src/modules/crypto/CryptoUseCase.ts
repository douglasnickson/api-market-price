import AppError from '@shared/http/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { CryptoService } from './services/CryptoService';

@injectable()
export class CryptoUseCase {
  constructor(
    @inject('CryptoService')
    private cryptoService: CryptoService) { }

  async execute(crypto: string) {
    try {
      const cryptoData = await this.cryptoService.getCrypto(crypto);
      return cryptoData;
    } catch (err: any) {
      console.log(err);
      throw new AppError('There was an error while fetching the crypto data.', err.response.status);
    }
  }
}
