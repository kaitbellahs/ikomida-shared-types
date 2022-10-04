import { Property } from '../Decorators/Property'
import { Enum } from '../Decorators/Enum'
import { FromJSON } from '../Decorators/FromJSON'
import { TDiscount } from '../Types'
import BaseJSON from './BaseJSON'
import { Nullable } from '../Decorators'

export default class CCoupon extends BaseJSON {
  @Property
  name!: string
  @Property
  value!: number
  @Property
  @Enum
  valueType!: TDiscount
  @Property
  @Nullable
  quantity?: number
  @Property
  @FromJSON
  @Nullable
  validity?: Date
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date

  static init(
    name: string,
    value: number,
    valueType: TDiscount,
    quantity?: number,
    validity?: Date,
    createdAt?: Date,
    id?: string,
    timestamp?: number
  ): CCoupon {
    return this.createInitObject(arguments)
  }
}
