import { Account } from './account';
export interface Asset {
  asset?: string;
  account_id?: string;
  account?: Account;
  type?: string;
  amount_precision?: number;
  onhand_amount?: string;
  locked_amount?: string;
  free_amount?: string;
  backtest?: string;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly deleted_at?: string;
}
