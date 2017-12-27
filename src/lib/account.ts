import * as Enums from './enums';

export interface Account {
  id: string;
  balance: string;
  bitcoin: string;
  backtest: string;
  positions: Position[];
  transactions: Transaction[];
}

export interface Transaction {
  account_id: string;
  order: string;
  symbol: string;
  type: Enums.SymbolType;
  side: Enums.OrderSide;
  price: string;
  quantity: string;
  backtest: string;
  mocktime?: string;
}

export interface Position {
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
