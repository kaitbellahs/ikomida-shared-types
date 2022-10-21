import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasError extends BaseJSON {
  @Property
  code?: string
  @Property
  description?: string
}
