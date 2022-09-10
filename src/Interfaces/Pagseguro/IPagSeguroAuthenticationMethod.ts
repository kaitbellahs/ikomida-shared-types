import BaseJSON from "../BaseJSON";

export default class IPagSeguroAuthenticationMethod extends BaseJSON {
  type?: string;
  cavv?: string;
  eci?: string;
  xid?: string;
  version?: string;
  dstrans_id?: string;
}
