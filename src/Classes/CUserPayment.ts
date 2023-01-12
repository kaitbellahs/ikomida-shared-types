import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'
import COrdersGroup from './COrdersGroup.js'
import CUser from './CUser.js'
import COrder from './COrder.js'
import CPos from './CPos.js'
import TPagSeguroPaymentStatus from '../Types/TPagSeguroPaymentStatus.js'

export default class CUserPayment extends BaseJSON {
  @Property
  @Nullable
  status?: TPagSeguroPaymentStatus
  @Property
  @Nullable
  gateway?: string
  @Property
  @Nullable
  brand?: string
  @Property
  @Nullable
  firstDigits?: string
  @Property
  @Nullable
  lastDigits?: string
  @Property
  @Nullable
  gatewayPaymentID?: string
  @Property
  @Nullable
  amount?: number
  @Property
  @Nullable
  active?: boolean
  @Property
  @FromJSON
  @Nullable
  user?: CUser
  @Property
  @FromJSON
  @Nullable
  order?: COrder
  @Property
  @FromJSON
  @Nullable
  pos?: CPos
  @Property
  @FromJSON
  @Nullable
  ordersGroup?: COrdersGroup

  static init(
    status?: TPagSeguroPaymentStatus,
    gateway?: string,
    brand?: string,
    firstDigits?: string,
    lastDigits?: string,
    gatewayPaymentID?: string,
    amount?: number,
    active?: boolean,
    user?: CUser,
    order?: COrder,
    pos?: CPos,
    ordersGroup?: COrdersGroup,
    id?: string,
    timestamp?: number
  ): CUserPayment {
    return this.createInitObject(arguments, [
      'status',
      'gateway',
      'brand',
      'firstDigits',
      'lastDigits',
      'gatewayPaymentID',
      'amount',
      'active',
      'user',
      'order',
      'pos',
      'ordersGroup',
      'id',
      'timestamp'
    ])
  }
}
