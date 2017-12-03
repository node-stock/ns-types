import { Account } from './account';
export class Earning {
    id?: number;
    account_id?: string;
    account?: Account;
    symbol: string;
    side?: string;
    quantity?: number;
    profit?: number;
    open?: number;
    close?: number;
    fee?: number;
    backtest?: string;
    mocktime?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;
}
