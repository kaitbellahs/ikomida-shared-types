import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroTokenData extends BaseJSON {
  @Property
  requestor_id?: string;
  @Property
  wallet?: string;
  @Property
  cryptogram?: string;
  @Property
  ecommerce_domain?: string;
  @Property
  assurance_level?: number;
}
