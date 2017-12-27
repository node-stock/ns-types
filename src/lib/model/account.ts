import { Position } from './position';
import { Transaction } from './transaction';
export class Account {
    id: string;
    balance?: string;
    bitcoin?: string;
    backtest?: string;
    positions?: Position[];
    transactions?: Transaction[];
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;
}
