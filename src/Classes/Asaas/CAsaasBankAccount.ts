import { FromJSON } from '../../Decorators/FromJSON'
import BaseJSON from '../BaseJSON'
import CAsaasBank from './CAsaasBank'
import { Property } from '../../Decorators/Property'

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
