export enum CandlestickUnit {
  Min1 = '1min',
  Min5 = '5min',
  Min15 = '15min',
  Min30 = '30min',
  Hour1 = '1hour',
  Hour4 = '4hour',
  Hour8 = '8hour',
  Hour12 = '12hour',
  Day1 = '1day',
  Week1 = '1week'
}

export enum Pair {
  BTC_JPY = 'btc_jpy',
  LTC_BTC = 'ltc_btc',
  XRP_JPY = 'xrp_jpy',
  ETH_BTC = 'eth_btc',
  MONA_JPY = 'mona_jpy',
  MONA_BTC = 'mona_btc',
  BCC_JPY = 'bcc_jpy',
  BCC_BTC = 'bcc_btc'
}

export enum PositionType {
  // 多头
  Bull = 'bull',
  // 空头
  Bear = 'bear'
}

export enum OrderStatus {
  Unfilled = 'UNFILLED',
  PartiallyFilled = 'PARTIALLY_FILLED',
  FullyFilled = 'FULLY_FILLED',
  CanceledUnfilled = 'CANCELED_UNFILLED',
  CanceledPartiallyFilled = 'CANCELED_PARTIALLY_FILLED'
}

export enum OrderStatusName {
  Unfilled = '未約定',
  PartiallyFilled = '一部約定',
  FullyFilled = '約定済',
  CanceledUnfilled = 'キャンセル済み未約定',
  CanceledPartiallyFilled = 'キャンセル済み一部約定'
}

export enum OrderSide {
  Buy = 'buy',
  BuyClose = 'buy_close',
  Sell = 'sell',
  SellClose = 'sell_close'
}

export enum OrderType {
  Limit = 'limit',
  Market = 'market',
  Stop = 'stop',
  StopLimit = 'stop_limit'
}

export enum TradeType {
  Spot = 'spot',
  Margin = 'margin'
}

export enum EventType {
  Order = 'order',
  Cancel = 'cancel'
}

export enum AssetType {
  Stock = 'stock',
  Jpy = 'jpy',
  Btc = 'btc',
  Ltc = 'ltc',
  Xrp = 'xrp',
  Eth = 'eth',
  Mona = 'mona',
  Bcc = 'bcc'
}

/**
 * 商品类型
 */
export enum SymbolType {
  /**
   * 股票
   */
  stock = 'stock',
  /**
   * 指数
   */
  index = 'index',
  /**
   * 外汇
   */
  forex = 'forex',
  /**
   * 期货
   */
  futures = 'futures',
  /**
   * 加密货币
   */
  cryptocoin = 'cryptocoin',
  /**
   * 货币
   */
  currency = 'currency',
  /**
   * 价差期权
   */
  spread = 'spread',
  /**
   * 差价合约
   */
  cfd = 'cfd'
}

/**
 * 时区
 */
export enum TimeZone {
  /**
   * UTC时区
   */
  UTC = 'UTC',
  /**
   * 上海时区
   */
  Shanghai = 'Asia/Shanghai',
  /**
   * 东京时区
   */
  Tokyo = 'Asia/Tokyo'
}
