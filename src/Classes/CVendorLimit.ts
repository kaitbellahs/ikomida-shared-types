import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CVendorLimit extends BaseJSON {
  @Property
  staff!: number;
  @Property
  products!: number;
  @Property
  orders!: number;
  @Property
  coupons!: number;
  @Property
  categories!: number;
  @Property
  pushNotifications!: number;
  @Property
  billing!: number;

  static init(
    staff: number,
    products: number,
    orders: number,
    coupons: number,
    categories: number,
    pushNotifications: number,
    billing: number,
    id?: string,
    timestamp?: number,
  ): CVendorLimit {
    return this.createInitObject(arguments);
  }
}
