import { Property } from '../Decorators/Property'
import { Enum } from '../Decorators/Enum'
import { FromJSON } from '../Decorators/FromJSON'
import { TPIX } from '../Types'
import BaseJSON from './BaseJSON'
import { Nullable } from '../Decorators'

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
    return this.createInitObject(arguments)
  }
}
