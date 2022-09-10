import BaseJSON from "../BaseJSON";

export default class IPagSeguroPaymentResponse extends BaseJSON {
  code?: string;
  message?: string;
  reference?: string;
}
