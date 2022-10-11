import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TSetting } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'

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
    return this.createInitObject(arguments, ['name', 'value', 'type', 'active', 'createdAt', 'id', 'timestamp'])
  }
}
