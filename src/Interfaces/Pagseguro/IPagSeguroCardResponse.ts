import { FromJSON } from '../../Decorators/FromJSON';
import IPagseguroErrorMessage from './IPagseguroErrorMessage';
import IPagSeguroHolder from './IPagSeguroHolder';
import { Property } from '../../Decorators/Property';

export default class IPagSeguroCardResponse extends IPagseguroErrorMessage {
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
  holder?: IPagSeguroHolder;
}
