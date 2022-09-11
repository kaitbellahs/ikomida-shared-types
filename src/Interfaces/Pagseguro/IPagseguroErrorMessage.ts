import BaseJSON from '../BaseJSON';

export default class IPagseguroErrorMessage extends BaseJSON {
  code?: number;
  description?: string;
  parameter_name?: string;
}
