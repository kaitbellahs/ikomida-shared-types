import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'
import CBusinessTime from './CBusinessTime.js'

export default class CProductCategory extends BaseJSON {
  @Property
  title!: string
  @Property
  @Nullable
  image?: string
  @Property
  @Nullable
  description?: string
  @Property
  @Nullable
  business?: CBusinessTime[]

  static init(
    title: string,
    image?: string,
    description?: string,
    business?: CBusinessTime[],
    id?: string,
    timestamp?: number
  ): CProductCategory {
    return this.createInitObject(arguments, ['title', 'image', 'description', 'business', 'id', 'timestamp'])
  }
}
