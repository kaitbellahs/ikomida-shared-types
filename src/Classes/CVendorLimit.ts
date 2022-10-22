import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CVendorLimit extends BaseJSON {
  @Property
  limits!: number

  @Property
  used!: number

  static init(limits: number, used: number, id?: string, timestamp?: number): CVendorLimit {
    return this.createInitObject(arguments, ['limits', 'used', 'id', 'timestamp'])
  }
}
