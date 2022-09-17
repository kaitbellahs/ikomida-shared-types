import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroSummary extends BaseJSON {
  @Property
  total?: number;
  @Property
  paid?: number;
  @Property
  refunded?: number;
}
