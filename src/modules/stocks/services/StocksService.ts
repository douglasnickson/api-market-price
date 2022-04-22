import { IStock } from "../model/IStock";

export interface StocksService {
  getStock(ticket: string): Promise<IStock>;
}
