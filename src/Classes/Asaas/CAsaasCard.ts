import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CAsaasCard extends BaseJSON {
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
