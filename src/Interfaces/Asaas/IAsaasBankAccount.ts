import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import IAsaasBank from './IAsaasBank';
import { Property } from '../../Decorators';

export default class IAsaasBankAccount extends BaseJSON {
  @Property
  @FromJSON
  bank?: IAsaasBank;
  @Property
  accountName?: string;
  @Property
  ownerName?: string;
  @Property
  cpfCnpj?: string;
  @Property
  agency?: string;
  @Property
  account?: string;
  @Property
  accountDigit?: string;
  @Property
  pixAddressKey?: string;
}
