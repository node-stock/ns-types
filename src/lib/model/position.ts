import { Account } from './account';
export class Position {
    id: number;
    account_id?: string;
    account?: Account;
    symbol?: string;
    side?: string;
    price?: number;
    quantity?: number;
    pnl?: number;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;
}