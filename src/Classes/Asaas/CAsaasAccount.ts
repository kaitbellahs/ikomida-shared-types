import { Enum } from '../../Decorators/Enum'
import { TCompany } from '../../Types'
import CAsaasCustomer from './CAsaasCustomer'
import { Property } from '../../Decorators/Property'

export default class CAsaasAccount extends CAsaasCustomer {
  @Property
  birthDate?: string
  @Property
  @Enum
  companyType?: TCompany
}
