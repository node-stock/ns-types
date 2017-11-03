export class Tick {
    exchange: string;
    market: string;
    symbol: string;
    date: string;
    price: number;
    volume: number;
    turnover: number;
    over_vol: number;
    under_vol: number;
    bid: number[];
    bid_vol: number[];
    ask: number[];
    ask_vol: number[];
    readonly created_at: string;
    readonly updated_at: string;
    readonly deleted_at: string;
}
