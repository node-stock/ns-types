import * as Enums from './enums';

export interface Event {
  eventId?: number,
  eventType: Enums.EventType
}

export interface Cancel extends Event {
  tradeType: Enums.TradeType,
  targetId: number
}

export interface Order extends Event {
  id?: string;
  account_id: string;
  signal_id?: string;
  symbol: string,
  symbolType: Enums.SymbolType,
  tradeType: Enums.TradeType,
  orderType: Enums.OrderType,
  side: Enums.OrderSide,
  price: string,
  backtest: string;
  mocktime?: string;
  amount: string
}
