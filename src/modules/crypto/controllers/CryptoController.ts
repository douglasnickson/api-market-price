import { Request, Response } from "express";
import { container } from "tsyringe";
import { CryptoUseCase } from "../CryptoUseCase";
import { CryptoServiceImpl } from "../services/impl/CryptoServiceImpl";

export class CryptoController {
  constructor() { }

  async getCrypto(request: Request, response: Response): Promise<Response> {
    const { crypto } = request.body;
    const cryptoService = container.resolve(CryptoServiceImpl);
    const cryptoUseCase = new CryptoUseCase(cryptoService);
    const cryptoData = await cryptoUseCase.execute(crypto);
    return response.status(200).json(cryptoData);
  }
}
