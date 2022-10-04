import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'

export default class CAsaasError extends BaseJSON {
  @Property
  code?: string
  @Property
  description?: string
}
