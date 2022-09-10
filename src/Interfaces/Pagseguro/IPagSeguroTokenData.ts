import BaseJSON from "../BaseJSON";

export default class IPagSeguroTokenData extends BaseJSON {
  requestor_id?: string;
  wallet?: string;
  cryptogram?: string;
  ecommerce_domain?: string;
  assurance_level?: number;
}
