import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CProductOption extends BaseJSON {
  @Property
  name!: string
  @Property
  highlighted!: boolean
  @Property
  price!: number
  @Property
  units!: number
  @Property
  order!: number
  @Property
  @Nullable
  image?: string

  static init(
    name: string,
    highlighted: boolean,
    price: number,
    units: number,
    order: number,
    image?: string,
    id?: string,
    timestamp?: number
  ): CProductOption {
    return this.createInitObject(arguments)
  }
}
