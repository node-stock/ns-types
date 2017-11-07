export class Order {
    no?: string;
    account?: string;
    symbol: string;
    side?: string;
    price?: number;
    quantity?: number;
    state?: number;
    backtest?: string;
    mocktime?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;
}
