import CAsaasCustomer from './CAsaasCustomer';
import { Property } from '../../Decorators/Property';

export default class CAsaasPaymentCustomer extends CAsaasCustomer {
  @Property
  ip?: string;
}
