import { Nullable } from '../Decorators'
import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'

export default class CProductCategory extends BaseJSON {
  @Property
  title!: string
  @Property
  @Nullable
  image?: string
  @Property
  @Nullable
  description?: string

  static init(title: string, image?: string, description?: string, id?: string, timestamp?: number): CProductCategory {
    return this.createInitObject(arguments)
  }
}
