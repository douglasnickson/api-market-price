import { ICrypto } from "../model/ICrypto";

export interface CryptoService {
  getCrypto(crypto: string): Promise<ICrypto>;
}
