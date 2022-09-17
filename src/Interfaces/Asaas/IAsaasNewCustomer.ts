import IAsaasCustomer from './IAsaasCustomer';
import { Property } from '../../Decorators/Property';

export default class IAsaasNewCustomer extends IAsaasCustomer {
  @Property
  externalReference?: string;
  @Property
  observations?: string;
}
