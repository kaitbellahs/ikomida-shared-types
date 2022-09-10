import { Enum } from '../../Decorators/Enum';
import { TCompany } from '../../Types';
import BaseJSON from '../BaseJSON';

export default class INewAccountRequest extends BaseJSON {
  name?: string;
  email?: string;
  cpfCnpj?: string;
  birthDate?: string;
  @Enum
  companyType?: TCompany;
  phone?: string;
  mobilePhone?: string;
  address?: string;
  addressNumber?: string;
  complement?: string;
  province?: string;
  postalCode?: string;
}
