import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import IAsaasAddress from './IAsaasAddress';
import { Property } from '../../Decorators';

export default class IAsaasCustomer extends BaseJSON {
  @Property
  @FromJSON
  address?: IAsaasAddress;
  @Property
  name?: string;
  @Property
  email?: string;
  @Property
  phone?: string;
  @Property
  identity?: string;
}
