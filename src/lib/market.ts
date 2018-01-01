import { Symbol } from './symbol';

/**
 * 交易市场集
 *
 * @interface
 */
export interface Market {
  /**
   * 市场名称
   */
  name: string,
  /**
   * 子市场
   */
  submarkets: {
    /**
     * 子市场名称
     */
    name: string,
    /**
     * 商品数组
     */
    symbols?: Symbol[]
  }[]
}
