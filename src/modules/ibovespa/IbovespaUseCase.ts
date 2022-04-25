import AppError from "@shared/http/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IBovespa } from "./model/Ibovespa";
import { IbovespaService } from "./services/IBovespaService";

@injectable()
export class IbovespaUseCase {
  constructor(
    @inject('IbovespaService')
    private ibovespaService: IbovespaService) { }

  async execute(ticket: string): Promise<IBovespa> {
    try {
      return await this.ibovespaService.getTicket(ticket);
    } catch (err: any) {
      throw new AppError('There was an error while fetching the stock data.', err.response.status);
    }
  }
}
