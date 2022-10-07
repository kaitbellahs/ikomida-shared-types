import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'
import { Nullable } from '../../Decorators/index.js'

export default class CAsaasSplit extends BaseJSON {
  @Property
  walletId!: string
  @Property
  @Nullable
  fixedValue?: number
  @Property
  @Nullable
  percentualValue?: number

  static inint(walletId: string, fixedValue?: number, percentualValue?: number): CAsaasSplit {
    return this.createInitObject(arguments)
  }
}
