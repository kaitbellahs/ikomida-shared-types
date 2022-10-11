import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TTerm } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'

export default class CTerm extends BaseJSON {
  @Property
  name!: string
  @Property
  text!: string
  @Property
  @Enum
  type!: TTerm
  @Property
  @Nullable
  active?: boolean
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date

  static init(
    name: string,
    text: string,
    type: TTerm,
    active?: boolean,
    createdAt?: Date,
    id?: string,
    timestamp?: number
  ): CTerm {
    return this.createInitObject(arguments, ['name', 'text', 'type', 'active', 'createdAt', 'id', 'timestamp'])
  }
}
