export enum OrderSide {
  Buy = 'buy',
  BuyClose = 'buy_close',
  Sell = 'sell',
  SellClose = 'sell_close'
}

export enum OrderStatus {
  Unfilled = '未約定',
  PartiallyFilled = '一部約定',
  FullyFilled = '約定済',
  CanceledUnfilled = '取消済',
  CanceledPartiallyFilled = '一部取消'
}

export enum OrderType {
  Limit = 'limit',
  Market = 'market'
}

export enum TradeType {
  Spot = 'spot',
  Margin = 'margin'
}

export enum EventType {
  Order = 'order',
  Cancel = 'cancel'
}

export interface Event {
  eventId?: number,
  eventType: EventType
}

export interface Cancel extends Event {
  tradeType: TradeType,
  targetId: number
}

export interface BaseOrder extends Event {
  symbol: string,
  tradeType: TradeType,
  orderType: OrderType,
  side: OrderSide,
  price?: number,
  backtest?: string;
  mocktime?: string;
  amount: number
}

export interface LimitOrder extends BaseOrder {
  orderType: OrderType.Limit,
  price: number
}

export interface MarketOrder extends BaseOrder {
  orderType: OrderType.Market
}

export type Order = LimitOrder | MarketOrder;

export interface Signal {
  symbol: string,
  side?: OrderSide,
  price?: number,
  timeframe?: string,
  notes?: string
}
