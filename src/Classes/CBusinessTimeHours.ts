import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CBusinessTimeHours extends BaseJSON {
  @Property
  @Nullable
  start?: string
  @Property
  @Nullable
  end?: string
}
