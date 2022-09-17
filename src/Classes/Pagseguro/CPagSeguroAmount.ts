import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import CPagSeguroSummary from './CPagSeguroSummary';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroAmount extends BaseJSON {
  @Property
  value?: number;
  @Property
  currency?: string;
  @Property
  @FromJSON
  summary?: CPagSeguroSummary;
}
