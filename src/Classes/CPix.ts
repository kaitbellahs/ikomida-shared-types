import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TPIX } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'

export default class CPix extends BaseJSON {
  @Property
  name!: string
  @Property
  @Enum
  kind!: TPIX
  @Property
  @Nullable
  key?: string
  @Property
  @Nullable
  bank?: string
  @Property
  @Nullable
  agency?: string
  @Property
  @Nullable
  account?: string
  @Property
  @Nullable
  note?: string
  @Property
  @Nullable
  status?: string
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date

  static init(
    name: string,
    kind: TPIX,
    key?: string,
    bank?: string,
    agency?: string,
    account?: string,
    note?: string,
    status?: string,
    createdAt?: Date,
    id?: string,
    timestamp?: number
  ): CPix {
    return this.createInitObject(arguments, [
      'name',
      'kind',
      'key',
      'bank',
      'agency',
      'account',
      'note',
      'status',
      'createdAt',
      'id',
      'timestamp'
    ])
  }
}
