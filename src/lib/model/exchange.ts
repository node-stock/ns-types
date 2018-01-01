import { Market } from './market';
export interface Exchange {
  code: string;
  name: string;
  shortname: string;
  description: string;
  markets: Market[];
  readonly created_at: string;
  readonly updated_at: string;
  readonly deleted_at: string;
}
