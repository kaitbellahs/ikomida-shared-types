import { Enum } from '../../Decorators/Enum';
import { TCompany, TPerson } from '../../Types';
import IAsaasAccountNumber from './IAsaasAccountNumber';
import IAsaasErrors from './IAsaasErrors';

export default class IAsaasNewAccountResponse extends IAsaasErrors {
  object?: string;
  id?: string;
  name?: string;
  email?: string;
  loginEmail?: string;
  phone?: string;
  mobilePhone?: string;
  address?: string;
  addressNumber?: string;
  complement?: string;
  province?: string;
  postalCode?: string;
  cpfCnpj?: string;
  birthDate?: string;
  @Enum
  personType?: TPerson;
  @Enum
  companyType?: TCompany;
  city?: number;
  state?: string;
  country?: string;
  apiKey?: string;
  walletId?: string;
  accountNumber?: IAsaasAccountNumber;
}
