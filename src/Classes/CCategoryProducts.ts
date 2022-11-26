import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import CProduct from './CProduct.js'
import { Nullable } from '../Decorators/index.js'
import CBusinessTime from './CBusinessTime.js'

export default class CCategoryProducts extends BaseJSON {
  @Property
  title!: string
  @Property
  @Nullable
  order?: number
  @Property
  @Nullable
  createdAt?: string
  @Property
  @Nullable
  description?: string
  @Property
  @FromJSON(CProduct)
  @Nullable
  products?: CProduct[]
  @Property
  @Nullable
  business?: CBusinessTime

  static init(
    title: string,
    order?: number,
    description?: string,
    createdAt?: string,
    products?: CProduct[],
    business?: CBusinessTime,
    id?: string,
    timestamp?: number
  ): CCategoryProducts {
    return this.createInitObject(arguments, [
      'title',
      'order',
      'description',
      'createdAt',
      'products',
      'business',
      'id',
      'timestamp'
    ])
  }
}
