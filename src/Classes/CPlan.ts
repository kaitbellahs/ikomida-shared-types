import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import TDiscount from '../Types/TDiscount.js'
import TSupport from '../Types/TSupport.js'
import BaseJSON from './BaseJSON.js'
import CKeyValue from './CKeyValue.js'
import { Nullable } from '../Decorators/index.js'

export default class CPlan extends BaseJSON {
  @Property
  name!: string
  @Property
  price!: number
  @Property
  discount!: number
  @Property
  @Enum
  discountType!: TDiscount
  @Property
  staff?: number
  @Property
  products?: number
  @Property
  productOptions?: number
  @Property
  categories?: number
  @Property
  pushNotifications?: number
  @Property
  orders?: number
  @Property
  coupons?: number
  @Property
  billing?: number
  @Property
  details?: CKeyValue[]
  @Property
  @FromJSON(TSupport)
  support?: TSupport[]
  @Property
  highlighted?: boolean
  @Property
  discountedPrice?: number
  @Property
  @Nullable
  active?: boolean
  @Property
  @Nullable
  createdAt?: Date
  @Property
  @Nullable
  order?: number
  @Property
  @Nullable
  dueDateAfterXDays?: number

  static init(
    name: string,
    price: number,
    discount: number,
    discountType: TDiscount,
    staff?: number,
    products?: number,
    productOptions?: number,
    categories?: number,
    pushNotifications?: number,
    orders?: number,
    coupons?: number,
    billing?: number,
    details?: CKeyValue[],
    support?: TSupport[],
    highlighted?: boolean,
    discountedPrice?: number,
    active?: boolean,
    createdAt?: Date,
    order?: number,
    dueDateAfterXDays?: number,
    id?: string,
    timestamp?: number
  ): CPlan {
    return this.createInitObject(arguments, [
      'name',
      'price',
      'discount',
      'discountType',
      'staff',
      'products',
      'productOptions',
      'categories',
      'pushNotifications',
      'orders',
      'coupons',
      'billing',
      'details',
      'support',
      'highlighted',
      'discountedPrice',
      'active',
      'createdAt',
      'order',
      'dueDateAfterXDays',
      'id',
      'timestamp'
    ])
  }
}
