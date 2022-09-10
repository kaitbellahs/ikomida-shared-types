import BaseJSON from "../BaseJSON";

export default class IPagSeguroSummary extends BaseJSON {
  total?: number;
  paid?: number;
  refunded?: number;
}
