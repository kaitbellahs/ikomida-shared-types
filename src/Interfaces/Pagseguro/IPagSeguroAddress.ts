import BaseJSON from "../BaseJSON";

export default class IPagSeguroAddress extends BaseJSON {
  street?: string;
  number?: string;
  complement?: string;
  locality?: string;
  city?: string;
  region_code?: string;
  country?: string;
  postal_code?: string;
}
