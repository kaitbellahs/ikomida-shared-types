import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'
import CUser from './CUser.js'
import COrder from './COrder.js'
import CPos from './CPos.js'
import CUserPayment from './CUserPayment.js'
import TOrdersGroup from '../Types/TOrdersGroup.js'

export default class COrdersGroup extends BaseJSON {
  @Property
  code!: string
  @Property
  @FromJSON
  kind!: TOrdersGroup
  @Property
  @FromJSON(COrder)
  @Nullable
  orders!: COrder[]
  @Property
  @FromJSON
  createdAt!: Date
  @Property
  @FromJSON
  updatedAt!: Date
  @Property
  @FromJSON
  @Nullable
  user?: CUser
  @Property
  @FromJSON(CUser)
  @Nullable
  users?: CUser[]
  @Property
  @FromJSON
  @Nullable
  pos?: CPos
  @Property
  @FromJSON(CUserPayment)
  @Nullable
  payments?: CUserPayment[]

  static init(
    code: string,
    kind: TOrdersGroup,
    createdAt: Date,
    updatedAt: string,
    user?: CUser,
    users?: CUser[],
    pos?: CPos,
    orders?: COrder[],
    payments?: CUserPayment[],
    id?: string,
    timestamp?: number
  ): COrdersGroup {
    return this.createInitObject(arguments, [
      'code',
      'kind',
      'createdAt',
      'updatedAt',
      'user',
      'users',
      'pos',
      'orders',
      'payments',
      'id',
      'timestamp'
    ])
  }
}
