import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class ISubscriptionDiscount extends BaseJSON {
  @Property
  value?: number;
  @Property
  dueDateLimitDays?: number;
}
