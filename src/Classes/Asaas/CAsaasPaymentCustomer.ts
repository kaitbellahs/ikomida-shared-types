import CAsaasCustomer from './CAsaasCustomer';
import { Property } from '../../Decorators/Property';

export default class CAsaasPaymentCustomer extends CAsaasCustomer {
  @Property
  id?: string;
  @Property
  ip?: string;
}
