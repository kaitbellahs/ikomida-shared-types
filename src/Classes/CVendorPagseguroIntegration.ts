import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'

export default class CvendorPagseguroIntegration extends BaseJSON {
  @Property
  state!: string
  @Property
  code!: string

  static init(state: string, code: string, id?: string, timestamp?: number): CvendorPagseguroIntegration {
    return this.createInitObject(arguments)
  }
}
