import { Request, Response } from "express";
import { StocksServiceImpl } from "../services/impl/StocksServiceImpl";
import { container } from "tsyringe";
import { StocksUseCase } from "../StocksUseCase";

export class StocksController {

  constructor() { }

  async getStock(request: Request, response: Response): Promise<Response> {
    const { symbols } = request.body;
    const stocksService = container.resolve(StocksServiceImpl);
    const stocksUseCase = new StocksUseCase(stocksService);
    const res = await stocksUseCase.execute(symbols);
    return response.status(200).json(res);
  }
}
