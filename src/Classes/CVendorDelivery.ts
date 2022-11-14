import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CVendorDelivery extends BaseJSON {
  @Property
  free!: boolean
  @Property
  value!: number
  @Property
  orderMinValue!: number
  @Property
  min!: number

  static init(free: boolean, value: number, orderMinValue: number, min: number, id?: string, timestamp?: number): CVendorDelivery {
    return this.createInitObject(arguments, ['free', 'value', 'orderMinValue', 'min', 'id', 'timestamp'])
  }
}
