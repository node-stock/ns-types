export interface Order {
  id?: string;
  account_id?: string;
  signal_id?: string;
  symbol: string;
  type?: string;
  order_type?: string;
  side?: string;
  price?: string;
  quantity?: string;
  status?: string;
  backtest?: string;
  mocktime?: string;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly deleted_at?: string;
}
