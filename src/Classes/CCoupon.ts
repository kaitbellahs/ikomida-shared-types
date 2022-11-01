import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TDiscount } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'

export default class CCoupon extends BaseJSON {
  @Property
  name!: string
  @Property
  value!: number
  @Property
  minValue!: number
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
    minValue: number,
    valueType: TDiscount,
    quantity?: number,
    validity?: Date,
    createdAt?: Date,
    id?: string,
    timestamp?: number
  ): CCoupon {
    return this.createInitObject(arguments, [
      'name',
      'value',
      'minValue',
      'valueType',
      'quantity',
      'validity',
      'createdAt',
      'id',
      'timestamp'
    ])
  }
}
