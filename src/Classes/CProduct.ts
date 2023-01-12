import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TDiscount, TMeasure } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import CProductCategory from './CProductCategory.js'
import Nullable from '../Decorators/Nullable.js'
import CProductOption from './CProductOption.js'
import CProductOptionsCategory from './CProductOptionsCategory.js'
import TOrderType from '../Types/TOrderType.js'
import TProductKind from '../Types/TProductKind.js'

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
  @Nullable
  measure?: number
  @Property
  @FromJSON
  @Nullable
  measureUnit?: TMeasure
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
  @Property
  @Nullable
  observation?: string
  @Property
  @Nullable
  active?: boolean
  @Property
  @FromJSON(TOrderType)
  @Nullable
  orderTypes?: TOrderType[]
  @Property
  @Nullable
  totalQuantity?: number
  @Property
  @Nullable
  maxQuantityPerOrder?: number
  @Property
  @Nullable
  code?: string
  @Property
  @Nullable
  integrationCode?: string
  @Property
  @FromJSON
  @Nullable
  kind?: TProductKind
  @Property
  @Nullable
  costPrice?: number
  @Property
  @Nullable
  minQuantity?: number

  static init(
    title: string,
    price: number,
    discount: number,
    discountType: TDiscount,
    quantity: number,
    description?: string,
    order?: number,
    serves?: number,
    measure?: number,
    measureUnit?: TMeasure,
    category?: CProductCategory,
    image?: string,
    optionsCategories?: CProductOptionsCategory[],
    options?: CProductOption[],
    createdAt?: Date,
    observation?: string,
    active?: boolean,
    orderTypes?: TOrderType[],
    totalQuantity?: number,
    maxQuantityPerOrder?: number,
    code?: string,
    integrationCode?: string,
    kind?: TProductKind,
    costPrice?: number,
    minQuantity?: number,
    id?: string,
    timestamp?: number
  ): CProduct {
    return this.createInitObject(arguments, [
      'title',
      'price',
      'discount',
      'discountType',
      'quantity',
      'description',
      'order',
      'serves',
      'measure',
      'measureUnit',
      'category',
      'image',
      'optionsCategories',
      'options',
      'createdAt',
      'observation',
      'active',
      'orderTypes',
      'totalQuantity',
      'maxQuantityPerOrder',
      'code',
      'integrationCode',
      'kind',
      'costPrice',
      'minQuantity',
      'id',
      'timestamp'
    ])
  }
}
