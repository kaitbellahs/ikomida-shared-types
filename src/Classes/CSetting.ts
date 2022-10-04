import { Property } from '../Decorators/Property'
import { Enum } from '../Decorators/Enum'
import { FromJSON } from '../Decorators/FromJSON'
import { TSetting } from '../Types'
import BaseJSON from './BaseJSON'
import { Nullable } from '../Decorators'

export default class CSetting extends BaseJSON {
  @Property
  name!: string
  @Property
  value!: string
  @Property
  @Enum
  type!: TSetting
  @Property
  active!: boolean
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date

  static init(
    name: string,
    value: string,
    type: TSetting,
    active: boolean,
    createdAt?: Date,
    id?: string,
    timestamp?: number
  ): CSetting {
    return this.createInitObject(arguments)
  }
}
