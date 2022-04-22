type IAttributes = {
  identifier: string;
  name: string;
  last: number;
  change: number;
  changePercent: number;
  previousClose: number;
  open: number;
  high: number;
  low: number;
  volume: number;
  dateTime: Date;
  quoteInfo: string
  close: number;
  changeFromPreviousClose: number | null;
  percentChangeFromPreviousClose: number | null;
  low52Week: number;
  high52Week: number;
  extendedHoursPrice: number;
  extendedHoursChange: number;
  extendedHoursPercentChange: number;
  extendedHoursDateTime: Date;
  extendedHoursType: string;
  sourceAPI: string;
  updated_at: Date;
}

export type IStock = {
  id: string;
  type: string;
  attributes: IAttributes
}
