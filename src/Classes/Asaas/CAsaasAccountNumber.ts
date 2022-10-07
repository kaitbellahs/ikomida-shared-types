import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasAccountNumber extends BaseJSON {
  @Property
  agency?: string
  @Property
  account?: string
  @Property
  accountDigit?: string
}
