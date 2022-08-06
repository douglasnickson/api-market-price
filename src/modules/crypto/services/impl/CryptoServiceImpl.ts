import api from '@config/api/axios';
import { ICrypto } from "@modules/crypto/model/ICrypto";
import { CryptoService } from "../CryptoService";

const API_KEY = process.env.FINANCE_API_KEY || '';

export class CryptoServiceImpl implements CryptoService {
  async getCrypto(ticket: string): Promise<ICrypto> {
    const headers = {
      headers: {
        'X-API-KEY': API_KEY,
      },
    };
    const response = await api.get(`/market/get-realtime-prices?symbols=${ticket}`, headers);
    const { data } = response.data;

    const crypto: ICrypto = data.map((crypto: ICrypto) => {
      return {
        id: crypto.id,
        type: crypto.type,
        attributes: {
          identifier: crypto.attributes.identifier,
          name: crypto.attributes.name,
          last: crypto.attributes.last,
          change: crypto.attributes.change,
          changePercent: crypto.attributes.changePercent,
          previousClose: crypto.attributes.previousClose,
          open: crypto.attributes.open,
          high: crypto.attributes.high,
          low: crypto.attributes.low,
          volume: crypto.attributes.volume,
          dateTime: crypto.attributes.dateTime,
          quoteInfo: crypto.attributes.quoteInfo,
          close: crypto.attributes.close,
          changeFromPreviousClose: crypto.attributes.changeFromPreviousClose,
          percentChangeFromPreviousClose: crypto.attributes.percentChangeFromPreviousClose,
          low52Week: crypto.attributes.low52Week,
          high52Week: crypto.attributes.high52Week,
          extendedHoursPrice: crypto.attributes.extendedHoursPrice,
          extendedHoursChange: crypto.attributes.extendedHoursChange,
          extendedHoursPercentChange: crypto.attributes.extendedHoursPercentChange,
          extendedHoursDateTime: crypto.attributes.extendedHoursDateTime,
          extendedHoursType: crypto.attributes.extendedHoursType,
          sourceAPI: crypto.attributes.sourceAPI,
          updated_at: crypto.attributes.updated_at,
        },
        meta: {
          price: crypto.meta.price,
          volume24usd: crypto.meta.volume24usd,
          symbol: crypto.meta.symbol,
          marketcap: crypto.meta.marketcap,
          supply: crypto.meta.supply,
          marketcapValue: crypto.meta.marketcapValue,
          high24: crypto.meta.high24,
          supplyValue: crypto.meta.supplyValue,
          volume24: crypto.meta.volume24,
          volume24Value: crypto.meta.volume24Value,
          low24: crypto.meta.low24,
        }
      }
    });
    return crypto;
  }
}
