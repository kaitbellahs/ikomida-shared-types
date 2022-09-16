import IAsaasCustomer from './IAsaasCustomer';
import { Property } from '../../Decorators';

export default class IAsaasPaymentCustomer extends IAsaasCustomer {
  @Property
  id?: string;
  @Property
  ip?: string;
}
