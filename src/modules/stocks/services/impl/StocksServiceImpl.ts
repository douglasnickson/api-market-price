import api from '@config/api/axios';
import { IStock } from '@modules/stocks/model/IStock';
import { StocksService } from "../StocksService";

const API_KEY = process.env.FINANCE_API_KEY || '';

export class StocksServiceImpl implements StocksService {
  public async getStock(ticket: string): Promise<IStock> {
    const headers = {
      headers: {
        'X-API-KEY': API_KEY,
      },
    };

    const response = await api.get(`/market/get-realtime-prices?symbols=${ticket}`, headers);
    const { data } = response.data;
    const stock: IStock = data.map((stock: IStock) => {
      return {
        id: stock.id,
        type: stock.type,
        attributes: {
          identifier: stock.attributes.identifier,
          name: stock.attributes.name,
          last: stock.attributes.last,
          change: stock.attributes.change,
          changePercent: stock.attributes.changePercent,
          previousClose: stock.attributes.previousClose,
          open: stock.attributes.open,
          high: stock.attributes.high,
          low: stock.attributes.low,
          volume: stock.attributes.volume,
          dateTime: stock.attributes.dateTime,
          quoteInfo: stock.attributes.quoteInfo,
          close: stock.attributes.close,
          changeFromPreviousClose: stock.attributes.changeFromPreviousClose,
          percentChangeFromPreviousClose: stock.attributes.percentChangeFromPreviousClose,
          low52Week: stock.attributes.low52Week,
          high52Week: stock.attributes.high52Week,
          extendedHoursPrice: stock.attributes.extendedHoursPrice,
          extendedHoursChange: stock.attributes.extendedHoursChange,
          extendedHoursPercentChange: stock.attributes.extendedHoursPercentChange,
          extendedHoursDateTime: stock.attributes.extendedHoursDateTime,
          extendedHoursType: stock.attributes.extendedHoursType,
          sourceAPI: stock.attributes.sourceAPI,
          updated_at: stock.attributes.updated_at,
        }
      }
    });
    return stock;
  }
}
