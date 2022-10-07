import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CVendorPreparation extends BaseJSON {
  @Property
  min!: number
  @Property
  max!: number

  static init(min: number, max: number, id?: string, timestamp?: number): CVendorPreparation {
    return this.createInitObject(arguments)
  }
}
