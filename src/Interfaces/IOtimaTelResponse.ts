import BaseJSON from "./BaseJSON";

export default class IOtimaTelResponse extends BaseJSON {
  status?: string;
  message?: {
    id?: string;
  };
}
