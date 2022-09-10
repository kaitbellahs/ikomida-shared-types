import BaseJSON from '../BaseJSON';
import IPagSeguroAddress from './IPagSeguroAddress';

export default class IPagSeguroBoletoHolder extends BaseJSON {
  address?: IPagSeguroAddress;
  name?: string;
  tax_id?: string;
  email?: string;
}
