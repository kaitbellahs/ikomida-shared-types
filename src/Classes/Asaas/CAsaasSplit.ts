import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'
import { Nullable } from '../../Decorators'

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
