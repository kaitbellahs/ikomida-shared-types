import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IAsaasCreditCardHolderInfo extends BaseJSON {
  @Property
  name?: string;
  @Property
  email?: string;
  @Property
  cpfCnpj?: string;
  @Property
  postalCode?: string;
  @Property
  addressNumber?: string;
  @Property
  addressComplement?: string;
  @Property
  phone?: string;
  @Property
  mobilePhone?: string;
}
