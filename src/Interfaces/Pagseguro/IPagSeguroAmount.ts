import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import IPagSeguroSummary from './IPagSeguroSummary';
import { Property } from '../../Decorators';

export default class IPagSeguroAmount extends BaseJSON {
  @Property
  value?: number;
  @Property
  currency?: string;
  @Property
  @FromJSON
  summary?: IPagSeguroSummary;
}
