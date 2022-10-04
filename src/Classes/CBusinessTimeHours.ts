import { Nullable } from '../Decorators'
import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'

export default class CBusinessTimeHours extends BaseJSON {
  @Property
  @Nullable
  start?: string
  @Property
  @Nullable
  end?: string
}
