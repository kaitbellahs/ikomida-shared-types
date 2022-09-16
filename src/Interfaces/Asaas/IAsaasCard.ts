import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IAsaasCard extends BaseJSON {
  @Property
  id?: string;
  @Property
  holderName?: string;
  @Property
  number?: number;
  @Property
  expiryMonth?: number;
  @Property
  expiryYear?: number;
  @Property
  ccv?: number;
}
