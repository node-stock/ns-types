import { Account } from './account';
export interface Transaction {
  account_id: string;
  account?: Account;
  order?: string;
  symbol?: string;
  type?: string;
  side?: string;
  price?: string;
  quantity?: string;
  backtest?: string;
  mocktime?: string;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly deleted_at?: string;
}
