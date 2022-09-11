import BaseJSON from '../BaseJSON';

export default class IAsaasAddress extends BaseJSON {
  postalCode?: string;
  name?: string;
  number?: string;
  complement?: string;
  province?: string;
}
