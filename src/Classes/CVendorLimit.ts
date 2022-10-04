import { Property } from '../Decorators/Property'
import { FromJSON } from '../Decorators/FromJSON'
import BaseJSON from './BaseJSON'

export default class CVendorLimit extends BaseJSON {
  @Property
  @FromJSON
  limits!: number

  @Property
  @FromJSON
  used!: number

  static init(limits: number, used: number, id?: string, timestamp?: number): CVendorLimit {
    return this.createInitObject(arguments)
  }
}
