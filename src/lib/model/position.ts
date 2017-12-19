import { Account } from './account';
export class Position {
    id?: number;
    account_id?: string;
    account?: Account;
    symbol: string;
    type?: string;
    side?: string;
    quantity?: number;
    price?: number;
    backtest?: string;
    mocktime?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;
}
