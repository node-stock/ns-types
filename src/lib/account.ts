import * as Enums from './enums';

export interface RecordTime {
  readonly created_at?: string;
  updated_at?: string;
  readonly deleted_at?: string;
}

export interface Account extends RecordTime {
  id: string;
  backtest: string;
  assets: Asset[];
  positions: Position[];
  transactions: Transaction[];
}

export interface Asset extends RecordTime {
  asset: string;
  account_id: string;
  type: Enums.SymbolType;
  amount_precision: number;
  onhand_amount: string;
  locked_amount: string;
  free_amount: string;
  backtest: string;
}

export interface Position extends RecordTime {
  id?: number;
  account_id: string;
  symbol: string;
  type: Enums.SymbolType;
  side: Enums.OrderSide;
  quantity: string;
  price: string;
  backtest: string;
  mocktime?: string;
}

export interface Transaction extends RecordTime {
  account_id: string;
  order_no: string;
  symbol: string;
  type: Enums.SymbolType;
  side: Enums.OrderSide;
  price: string;
  quantity: string;
  backtest: string;
  mocktime?: string;
}

export interface Signal extends RecordTime {
  id?: string;
  symbol: string;
  timeframe: string;
  type: Enums.SymbolType;
  side: Enums.OrderSide;
  price: string;
  notes: string;
  backtest: string;
  time: string;
  mocktime?: string;
}

export interface Earning extends RecordTime {
  id?: number;
  account_id: string;
  symbol: string;
  type: string;
  side: string;
  quantity: string;
  profit: string;
  pips: string;
  open: string;
  close: string;
  fee: string;
  backtest: string;
  mocktime?: string;
}
