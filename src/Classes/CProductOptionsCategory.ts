import { Nullable } from '../Decorators/index.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'
import CProductOption from './CProductOption.js'

export default class CProductOptionsCategory extends BaseJSON {
  @Property
  name!: string
  @Property
  highlighted!: boolean
  @Property
  min!: number
  @Property
  max!: number
  @Property
  order!: number
  @Property
  @FromJSON(CProductOption)
  options!: CProductOption[]
  @Property
  @Nullable
  image?: string

  static init(
    name: string,
    highlighted: boolean,
    min: number,
    max: number,
    order: number,
    options: CProductOption[],
    image?: string,
    id?: string,
    timestamp?: number
  ): CProductOptionsCategory {
    return this.createInitObject(arguments)
  }
}
