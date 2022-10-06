import { Nullable } from '../Decorators'
import { FromJSON } from '../Decorators/FromJSON'
import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'
import CProductOption from './CProductOption'

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
