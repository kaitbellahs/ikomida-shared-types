import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TDiscount } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import CProductCategory from './CProductCategory.js'
import { Nullable } from '../Decorators/index.js'
import CProductOptionsCategory from './CProductOptionsCategory.js'
import CProductOption from './CProductOption.js'

export default class CProduct extends BaseJSON {
  @Property
  title!: string
  @Property
  price!: number
  @Property
  discount!: number
  @Property
  @Enum
  discountType!: TDiscount
  @Property
  quantity!: number
  @Property
  @Nullable
  description?: string
  @Property
  @Nullable
  order?: number
  @Property
  @Nullable
  serves?: number
  @Property
  weight?: number
  @Property
  @FromJSON
  @Nullable
  category?: CProductCategory
  @Property
  @Nullable
  image?: string
  @Property
  @FromJSON(CProductOptionsCategory)
  @Nullable
  optionsCategories?: CProductOptionsCategory[]
  @Property
  @FromJSON(CProductOption)
  @Nullable
  options?: CProductOption[]
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date

  static init(
    title: string,
    price: number,
    discount: number,
    discountType: TDiscount,
    quantity: number,
    description?: string,
    order?: number,
    serves?: number,
    weight?: number,
    category?: CProductCategory,
    image?: string,
    optionsCategories?: CProductOptionsCategory[],
    options?: CProductOption[],
    createdAt?: Date,
    id?: string,
    timestamp?: number
  ): CProduct {
    return this.createInitObject(arguments)
  }
}
