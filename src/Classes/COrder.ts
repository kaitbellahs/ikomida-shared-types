import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TOrderStatus, TPaymentMethod } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import CAddress from './CAddress.js'
import CCoupon from './CCoupon.js'
import COrderPreparation from './COrderPreparation.js'
import CPaymentMethod from './CPaymentMethod.js'
import CProduct from './CProduct.js'
import CUser from './CUser.js'
import { Nullable } from '../Decorators/index.js'
import CLocation from './CLocation.js'

export default class COrder extends BaseJSON {
  @Property
  subtotal!: number
  @Property
  discount!: number
  @Property
  delivery!: number
  @Property
  @FromJSON(CProduct)
  products!: CProduct[]
  @Property
  @FromJSON
  address!: CAddress
  @Property
  @Enum
  paymentMethodType!: TPaymentMethod
  @Property
  @FromJSON
  preparation!: COrderPreparation
  @Property
  @FromJSON
  @Nullable
  coupon?: CCoupon
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date
  @Property
  @Nullable
  customID?: number
  @Property
  @Enum
  @Nullable
  status?: TOrderStatus
  @Property
  @FromJSON
  @Nullable
  finishedAt?: Date
  @Property
  @FromJSON
  @Nullable
  payment?: CPaymentMethod
  @Property
  @FromJSON
  @Nullable
  user?: CUser
  @Property
  @FromJSON
  @Nullable
  location?: CLocation

  static init(
    subtotal: number,
    discount: number,
    delivery: number,
    products: CProduct[],
    address: CAddress,
    paymentMethodType: TPaymentMethod,
    preparation: COrderPreparation,
    coupon?: CCoupon,
    createdAt?: Date,
    customID?: number,
    status?: TOrderStatus,
    finishedAt?: Date,
    payment?: CPaymentMethod,
    user?: CUser,
    id?: string,
    timestamp?: number,
    location?: CLocation
  ): COrder {
    return this.createInitObject(arguments)
  }
}
