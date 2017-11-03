import { Exchange } from './exchange';
export class Market {
    code: string;
    exchange: string;
    ex?: Exchange;
    name: string;
    description: string;
    readonly created_at: string;
    readonly updated_at: string;
    readonly deleted_at: string;
}
