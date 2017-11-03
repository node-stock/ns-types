export class Candlestick {
    symbol: string;
    date: string;
    unit: string;
    close: number;
    open: number;
    high: number;
    low: number;
    volume: number;
    readonly created_at: string;
    readonly updated_at: string;
    readonly deleted_at: string;
}
