import { FromJSON } from '../../Decorators/FromJSON';
import CPagseguroErrorMessage from './CPagseguroErrorMessage';
import CPagSeguroHolder from './CPagSeguroHolder';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroCardResponse extends CPagseguroErrorMessage {
  @Property
  id?: string;
  @Property
  brand?: string;
  @Property
  first_digits?: string;
  @Property
  last_digits?: string;
  @Property
  exp_month?: string;
  @Property
  exp_year?: string;
  @Property
  @FromJSON
  holder?: CPagSeguroHolder;
}
