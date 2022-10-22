import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CKeyValue extends BaseJSON {
  @Property
  @Nullable
  key?: string
  @Property
  @Nullable
  value?: null | string
}
