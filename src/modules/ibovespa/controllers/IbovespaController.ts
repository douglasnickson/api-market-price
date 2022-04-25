import { Request, Response } from "express";
import { container } from "tsyringe";
import { IbovespaUseCase } from "../IbovespaUseCase";
import { IbovespaServiceImpl } from "../services/impl/IBovespaServiceImpl";

export class IbovespaController {
  constructor() { }

  async getTicket(request: Request, response: Response): Promise<Response> {
    const { ticket } = request.body;
    const ibovespaService = container.resolve(IbovespaServiceImpl);
    const ibovespaUseCase = new IbovespaUseCase(ibovespaService);
    const ibovespaData = await ibovespaUseCase.execute(ticket);
    return response.status(200).json(ibovespaData);
  }
}
