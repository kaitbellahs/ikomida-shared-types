import BaseJSON from '../BaseJSON';
import IAsaasBank from './IAsaasBank';

export default class IAsaasBankAccount extends BaseJSON {
  bank?: IAsaasBank;
  accountName?: string;
  ownerName?: string;
  cpfCnpj?: string;
  agency?: string;
  account?: string;
  accountDigit?: string;
  pixAddressKey?: string;
}
