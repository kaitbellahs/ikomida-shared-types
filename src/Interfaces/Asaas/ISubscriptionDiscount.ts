import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class ISubscriptionDiscount extends BaseJSON {
  @Property
  value?: number;
  @Property
  dueDateLimitDays?: number;
}
