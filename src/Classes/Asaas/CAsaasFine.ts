import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'
import { Nullable } from '../../Decorators/index.js'

export default class CAsaasFine extends BaseJSON {
  @Property
  @Nullable
  value?: number
  @Property
  @Nullable
  type?: string

  static init(value?: number, type?: string): CAsaasFine {
    return this.createInitObject(arguments)
  }
}
