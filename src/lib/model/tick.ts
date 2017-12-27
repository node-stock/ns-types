export class Tick {
    exchange: string;
    market: string;
    symbol: string;
    date: string;
    price: string;
    volume: string;
    turnover: string;
    over_vol: string;
    under_vol: string;
    bid: string[];
    bid_vol: string[];
    ask: string[];
    ask_vol: string[];
    readonly created_at: string;
    readonly updated_at: string;
    readonly deleted_at: string;
}
