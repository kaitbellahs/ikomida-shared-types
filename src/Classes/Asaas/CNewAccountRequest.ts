import { Enum } from '../../Decorators/Enum';
import { TCompany } from '../../Types';
import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CNewAccountRequest extends BaseJSON {
  @Property
  name?: string;
  @Property
  email?: string;
  @Property
  cpfCnpj?: string;
  @Property
  birthDate?: string;
  @Property
  @Enum
  companyType?: TCompany;
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
}
