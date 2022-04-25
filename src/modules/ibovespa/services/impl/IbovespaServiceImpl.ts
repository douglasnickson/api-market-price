import axios from 'axios';
import { IBovespa } from '@modules/ibovespa/model/Ibovespa';
import { IbovespaService } from '../IBovespaService';
import { IResult } from '@modules/ibovespa/model/IResult';
import { IMarketTime } from '@modules/ibovespa/model/IMarketTime';

const API_KEY = process.env.HG_BRASIL_API_KEY || '';
const BASE_URL = 'https://api.hgbrasil.com/finance';

export class IbovespaServiceImpl implements IbovespaService {
  public async getTicket(ticket: string): Promise<IBovespa> {
    const response = await axios.get(`${BASE_URL}/stock_price?key=${API_KEY}&symbol=${ticket}`);
    const { data } = response;
    const acao = data.results[ticket];
      return {
        by: data.by,
        valid_key: data.valid_key,
        results: {
          symbol: acao.symbol,
          name: acao.name,
          company_name: acao.company_name,
          document: acao.document,
          description: acao.description,
          website: acao.website,
          region: acao.region,
          currency: acao.currency,
          market_time: {
            open: acao.market_time.open,
            close: acao.market_time.close,
            timezone: acao.market_time.timezone,
          } as IMarketTime,
          market_cap: acao.market_cap,
          price: acao.price,
          change_percent: acao.change_percent,
          update_at: acao.update_at,
        } as IResult,
        execution_time: data.execution_time,
        from_cache: data.from_cache,
      }
  }
}
