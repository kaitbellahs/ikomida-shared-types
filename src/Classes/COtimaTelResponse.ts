import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class COtimaTelResponse extends BaseJSON {
  @Property
  @Nullable
  status?: string
  @Property
  @Nullable
  message?: {
    id?: string
  }
}
