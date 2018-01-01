export interface Signal {
  id?: string;
  symbol: string;
  timeframe?: string;
  type?: string;
  side?: string;
  price?: string;
  notes?: string;
  backtest?: string;
  mocktime?: string;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly deleted_at?: string;
}
