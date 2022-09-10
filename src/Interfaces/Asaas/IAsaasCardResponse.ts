import IAsaasErrors from './IAsaasErrors';

export default class IAsaasCardResponse extends IAsaasErrors {
  creditCardNumber?: string;
  creditCardBrand?: string;
  creditCardToken?: string;
}
