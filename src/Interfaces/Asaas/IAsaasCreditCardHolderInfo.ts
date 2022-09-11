import BaseJSON from '../BaseJSON';

export default class IAsaasCreditCardHolderInfo extends BaseJSON {
  name?: string;
  email?: string;
  cpfCnpj?: string;
  postalCode?: string;
  addressNumber?: string;
  addressComplement?: string;
  phone?: string;
  mobilePhone?: string;
}
