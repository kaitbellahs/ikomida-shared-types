import { Enum } from '../../Decorators/Enum';
import { TCompany } from '../../Types';
import IAsaasCustomer from './IAsaasCustomer';
import { Property } from '../../Decorators';

export default class IAsaasAccount extends IAsaasCustomer {
  @Property
  birthDate?: string;
  @Property
  @Enum
  companyType?: TCompany;
}
