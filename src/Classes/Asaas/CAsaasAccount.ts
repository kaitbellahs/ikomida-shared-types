import { Enum } from '../../Decorators/Enum.js'
import { TCompany } from '../../Types/index.js'
import CAsaasCustomer from './CAsaasCustomer.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasAccount extends CAsaasCustomer {
  @Property
  birthDate?: string
  @Property
  @Enum
  companyType?: TCompany
}
