import { FromJSON } from '../../Decorators/FromJSON'
import BaseJSON from '../BaseJSON'
import CAsaasAddress from './CAsaasAddress'
import { Property } from '../../Decorators/Property'

export default class CAsaasCustomer extends BaseJSON {
  @Property
  @FromJSON
  address!: CAsaasAddress
  @Property
  name!: string
  @Property
  email!: string
  @Property
  phone!: string
  @Property
  identity!: string

  static init(address: CAsaasAddress, name: string, email: string, phone: string, identity: string): CAsaasCustomer {
    return this.createInitObject(arguments)
  }
}
