import { IMarketTime } from "./IMarketTime";

export type IResult = {
  symbol: string;
  name: string;
  company_name: string;
  document: string;
  description: string;
  website: string;
  region: string;
  currency: string;
  market_time: IMarketTime;
  market_cap: number;
  price: number;
  change_percent: number;
  update_at: string;
}
