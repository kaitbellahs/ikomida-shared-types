import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagseguroErrorMessage extends BaseJSON {
  @Property
  code?: number
  @Property
  message?: string
  @Property
  description?: string
  @Property
  parameter_name?: string
}
