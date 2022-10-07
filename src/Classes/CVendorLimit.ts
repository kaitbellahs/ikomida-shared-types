import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'

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
