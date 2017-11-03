import { Exchange } from './exchange';
import { Market } from './market';
import { Sector } from './sector';
import { Industry } from './industry';
export class SymbolInfo {
    symbol: string;
    exchange: string;
    ex?: Exchange;
    market: string;
    ma?: Market;
    name: string;
    full_name: string;
    type: string;
    sector: string;
    se?: Sector;
    industry: string;
    in?: Industry;
    readonly created_at: string;
    readonly updated_at: string;
    readonly deleted_at: string;
}
