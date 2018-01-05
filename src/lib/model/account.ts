import { Asset } from './asset';
import { Position } from './position';
import { Transaction } from './transaction';
export interface Account {
  id: string;
  backtest?: string;
  assets?: Asset[];
  positions?: Position[];
  transactions?: Transaction[];
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly deleted_at?: string;
}
