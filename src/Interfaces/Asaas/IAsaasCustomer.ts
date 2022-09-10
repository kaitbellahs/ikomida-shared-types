import BaseJSON from '../BaseJSON';
import IAsaasAddress from './IAsaasAddress';

export default class IAsaasCustomer extends BaseJSON {
  address?: IAsaasAddress;
  name?: string;
  email?: string;
  phone?: string;
  identity?: string;
}
