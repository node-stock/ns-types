import { Account } from './account';
export interface Earning {
  id?: number;
  account_id?: string;
  account?: Account;
  symbol: string;
  type?: string;
  side?: string;
  quantity?: string;
  profit?: string;
  open?: string;
  close?: string;
  fee?: string;
  backtest?: string;
  mocktime?: string;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly deleted_at?: string;
}
