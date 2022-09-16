import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IChargeResponse extends BaseJSON {
  @Property
  id?: string;
  @Property
  cardId?: string;
  @Property
  brand?: string;
  @Property
  firstDigits?: number;
  @Property
  lastDigits?: number;
  @Property
  ikomidaID?: string;
  @Property
  orderID?: string;
  @Property
  status?: string;
  @Property
  amount?: number;
}
