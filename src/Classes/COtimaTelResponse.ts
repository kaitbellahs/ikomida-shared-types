import { Nullable } from '../Decorators'
import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'

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
