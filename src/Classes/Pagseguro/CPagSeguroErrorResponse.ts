import { FromJSON } from '../../Decorators/FromJSON.js'
import BaseJSON from '../BaseJSON.js'
import CPagseguroErrorMessage from './CPagseguroErrorMessage.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroErrorResponse extends BaseJSON {
  @Property
  @FromJSON(CPagseguroErrorMessage)
  error_messages?: CPagseguroErrorMessage[]
}
