import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CvendorPagseguroIntegration extends BaseJSON {
  @Property
  state!: string
  @Property
  code!: string

  static init(state: string, code: string, id?: string, timestamp?: number): CvendorPagseguroIntegration {
    return this.createInitObject(arguments)
  }
}
