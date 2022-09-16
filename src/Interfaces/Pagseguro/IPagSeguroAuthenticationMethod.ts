import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroAuthenticationMethod extends BaseJSON {
  @Property
  type?: string;
  @Property
  cavv?: string;
  @Property
  eci?: string;
  @Property
  xid?: string;
  @Property
  version?: string;
  @Property
  dstrans_id?: string;
}
