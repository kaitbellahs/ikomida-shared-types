import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'

export default class CPagseguroErrorMessage extends BaseJSON {
  @Property
  code?: number
  @Property
  description?: string
  @Property
  parameter_name?: string
}
