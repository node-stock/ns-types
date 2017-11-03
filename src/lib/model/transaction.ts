import { Account } from './account';
export class Transaction {
    account_id: string;
    account?: Account;
    order?: string;
    symbol?: string;
    side?: string;
    price?: number;
    quantity?: number;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;
}
