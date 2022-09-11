import BaseJSON from '../BaseJSON';

export default class IAsaasCard extends BaseJSON {
  id?: string;
  holderName?: string;
  number?: number;
  expiryMonth?: number;
  expiryYear?: number;
  ccv?: number;
}
