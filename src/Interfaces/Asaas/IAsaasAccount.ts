import { Enum } from '../../Decorators/Enum';
import { TCompany } from '../../Types';
import IAsaasCustomer from './IAsaasCustomer';

export default class IAsaasAccount extends IAsaasCustomer {
  birthDate?: string;
  @Enum
  companyType?: TCompany;
}
