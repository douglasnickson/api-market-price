import { IResult } from "./IResult";

export type IBovespa = {
  by: string;
  valid_key: boolean;
  results: IResult;
  execution_time: number;
  from_cache: boolean;
}
