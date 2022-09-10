import BaseJSON from '../BaseJSON';
import IPagSeguroSummary from './IPagSeguroSummary';

export default class IPagSeguroAmount extends BaseJSON {
  value?: number;
  currency?: string;
  summary?: IPagSeguroSummary;
}
