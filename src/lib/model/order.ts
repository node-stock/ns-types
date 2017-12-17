export class Order {
    id: string;
    account_id?: string;
    symbol: string;
    side?: string;
    price?: number;
    quantity?: number;
    status?: string;
    backtest?: string;
    mocktime?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;
}
