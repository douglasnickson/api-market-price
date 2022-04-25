import { IBovespa } from "../model/Ibovespa";

export interface IbovespaService {
  getTicket(ticket: string): Promise<IBovespa>;
}
