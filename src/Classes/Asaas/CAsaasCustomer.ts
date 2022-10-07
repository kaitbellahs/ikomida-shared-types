import { FromJSON } from '../../Decorators/FromJSON.js'
import BaseJSON from '../BaseJSON.js'
import CAsaasAddress from './CAsaasAddress.js'
import { Property } from '../../Decorators/Property.js'

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
