import { Request, Response } from "express";
import { IStock } from "../model/IStock";
import { StocksServiceImpl } from "../services/impl/StocksServiceImpl";
import { container } from "tsyringe";
import { StocksUseCase } from "../StocksUseCase";

export class StocksController {

  constructor() { }

  async getStock(request: Request, response: Response): Promise<IStock> {
    const { symbols } = request.body;
    const stocksService = container.resolve(StocksServiceImpl);
    const stocksUseCase = new StocksUseCase(stocksService);

    return await stocksUseCase.execute(symbols);
  }
}
