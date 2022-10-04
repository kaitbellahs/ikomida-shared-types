import { Property } from '../Decorators/Property'
import { FromJSON } from '../Decorators/FromJSON'
import { CAsaasCard } from './Asaas'
import BaseJSON from './BaseJSON'
import CAddress from './CAddress'
import CCoupon from './CCoupon'
import CLocation from './CLocation'
import CProduct from './CProduct'
import { Nullable } from '../Decorators'

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
