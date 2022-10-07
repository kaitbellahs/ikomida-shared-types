import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class COrderPreparation extends BaseJSON {
  @Property
  min!: number
  @Property
  max!: number

  static init(min: number, max: number, id?: string, timestamp?: number): COrderPreparation {
    return this.createInitObject(arguments)
  }
}
