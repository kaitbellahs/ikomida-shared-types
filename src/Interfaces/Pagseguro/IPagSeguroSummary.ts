import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroSummary extends BaseJSON {
  @Property
  total?: number;
  @Property
  paid?: number;
  @Property
  refunded?: number;
}
