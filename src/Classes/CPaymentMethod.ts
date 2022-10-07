import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TPaymentMethod } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'

export default class CPaymentMethod extends BaseJSON {
  @Property
  @Enum
  type!: TPaymentMethod
  @Property
  brand!: string
  @Property
  lastDigits!: string
  @Property
  @Nullable
  selected?: boolean
  @Property
  @Nullable
  firstDigits?: string
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date

  static init(
    type: TPaymentMethod,
    brand: string,
    lastDigits: string,
    firstDigits?: string,
    selected?: boolean,
    createdAt?: Date,
    id?: string,
    timestamp?: number
  ): CPaymentMethod {
    return this.createInitObject(arguments)
  }
}
