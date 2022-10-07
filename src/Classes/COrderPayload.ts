import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { CAsaasCard } from './Asaas/index.js'
import BaseJSON from './BaseJSON.js'
import CAddress from './CAddress.js'
import CCoupon from './CCoupon.js'
import CLocation from './CLocation.js'
import CProduct from './CProduct.js'
import { Nullable } from '../Decorators/index.js'

export default class COrderPayload extends BaseJSON {
  @Property
  @FromJSON(CProduct)
  products!: CProduct[]
  @Property
  @FromJSON
  payment!: CAsaasCard
  @Property
  @FromJSON
  address!: CAddress
  @Property
  delivery!: number
  @Property
  @FromJSON
  @Nullable
  coupon?: CCoupon
  @Property
  @FromJSON
  @Nullable
  location?: CLocation

  static init(
    products: CProduct[],
    payment: CAsaasCard,
    address: CAddress,
    delivery: number,
    coupon?: CCoupon,
    location?: CLocation,
    id?: string,
    timestamp?: number
  ): COrderPayload {
    return this.createInitObject(arguments)
  }
}
