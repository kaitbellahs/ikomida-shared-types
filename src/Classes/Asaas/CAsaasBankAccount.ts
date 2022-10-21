import { FromJSON } from '../../Decorators/FromJSON.js'
import BaseJSON from '../BaseJSON.js'
import CAsaasBank from './CAsaasBank.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasBankAccount extends BaseJSON {
  @Property
  @FromJSON
  bank?: CAsaasBank
  @Property
  accountName?: string
  @Property
  ownerName?: string
  @Property
  cpfCnpj?: string
  @Property
  agency?: string
  @Property
  account?: string
  @Property
  accountDigit?: string
  @Property
  pixAddressKey?: string
}
