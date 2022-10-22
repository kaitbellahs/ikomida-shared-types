import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'
import CVendorLimit from './CVendorLimit.js'

export default class CVendorLimits extends BaseJSON {
  @Property
  staff!: CVendorLimit
  @Property
  products!: CVendorLimit
  @Property
  orders!: CVendorLimit
  @Property
  coupons!: CVendorLimit
  @Property
  categories!: CVendorLimit
  @Property
  pushNotifications!: CVendorLimit
  @Property
  billing!: CVendorLimit

  static init(
    staff: CVendorLimit,
    products: CVendorLimit,
    orders: CVendorLimit,
    coupons: CVendorLimit,
    categories: CVendorLimit,
    pushNotifications: CVendorLimit,
    billing: CVendorLimit,
    id?: string,
    timestamp?: CVendorLimit
  ): CVendorLimits {
    return this.createInitObject(arguments, [
      'staff',
      'products',
      'orders',
      'coupons',
      'categories',
      'pushNotifications',
      'billing',
      'id',
      'timestamp'
    ])
  }
}
