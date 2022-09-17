import IAsaasErrors from './IAsaasErrors';
import { Property } from '../../Decorators/Property';

export default class IAsaasCardResponse extends IAsaasErrors {
  @Property
  creditCardNumber?: string;
  @Property
  creditCardBrand?: string;
  @Property
  creditCardToken?: string;
}
