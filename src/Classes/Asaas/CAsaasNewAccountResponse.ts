import { Enum } from '../../Decorators/Enum';
import { FromJSON } from '../../Decorators/FromJSON';
import { TCompany, TPerson } from '../../Types';
import CAsaasAccountNumber from './CAsaasAccountNumber';
import CAsaasErrors from './CAsaasErrors';
import { Property } from '../../Decorators/Property';

export default class CAsaasNewAccountResponse extends CAsaasErrors {
  @Property
  object?: string;
  @Property
  id?: string;
  @Property
  name?: string;
  @Property
  email?: string;
  @Property
  loginEmail?: string;
  @Property
  phone?: string;
  @Property
  mobilePhone?: string;
  @Property
  address?: string;
  @Property
  addressNumber?: string;
  @Property
  complement?: string;
  @Property
  province?: string;
  @Property
  postalCode?: string;
  @Property
  cpfCnpj?: string;
  @Property
  birthDate?: string;
  @Property
  @Enum
  personType?: TPerson;
  @Property
  @Enum
  companyType?: TCompany;
  @Property
  city?: number;
  @Property
  state?: string;
  @Property
  country?: string;
  @Property
  apiKey?: string;
  @Property
  walletId?: string;
  @Property
  @FromJSON
  accountNumber?: CAsaasAccountNumber;
}
