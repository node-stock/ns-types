import { Account } from './account';
export interface Position {
  id?: number;
  account_id?: string;
  account?: Account;
  symbol: string;
  type?: string;
  side?: string;
  quantity?: string;
  price?: string;
  backtest?: string;
  mocktime?: string;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly deleted_at?: string;
}
