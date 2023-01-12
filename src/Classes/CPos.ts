import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'
import COrdersGroup from './COrdersGroup.js'
import CUser from './CUser.js'
import COrder from './COrder.js'
import CUserPayment from './CUserPayment.js'

export default class CPos extends BaseJSON {
  @Property
  openBalance!: number
  @Property
  sessionId!: string
  @Property
  @FromJSON
  sessionUpdatedAt!: Date
  @Property
  @FromJSON
  createdAt!: Date
  @Property
  @FromJSON
  @Nullable
  closeDate?: Date
  @Property
  @Nullable
  closeBalance?: number
  @Property
  @Nullable
  discount?: number
  @Property
  @Nullable
  discountRaison?: string
  @Property
  @FromJSON
  @Nullable
  user?: CUser
  @Property
  @FromJSON(CUser)
  @Nullable
  users?: CUser[]
  @Property
  @FromJSON(COrdersGroup)
  @Nullable
  ordersGroups?: COrdersGroup[]
  @Property
  @FromJSON(COrder)
  @Nullable
  orders?: COrder[]
  @Property
  @FromJSON(CUserPayment)
  @Nullable
  payments?: CUserPayment[]

  static init(
    openBalance: number,
    sessionId: string,
    sessionUpdatedAt: string,
    createdAt: Date,
    closeDate?: Date,
    closeBalance?: number,
    discount?: number,
    discountRaison?: string,
    user?: CUser,
    users?: CUser[],
    ordersGroups?: string,
    orders?: string,
    payments?: CUserPayment[],
    id?: string,
    timestamp?: number
  ): CPos {
    return this.createInitObject(arguments, [
      'openBalance',
      'sessionId',
      'sessionUpdatedAt',
      'createdAt',
      'loseDate',
      'closeBalance',
      'discount',
      'discountRaison',
      'user',
      'users',
      'ordersGroups',
      'orders',
      'payments',
      'id',
      'timestamp'
    ])
  }
}
