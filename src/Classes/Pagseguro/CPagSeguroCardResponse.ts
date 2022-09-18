import { FromJSON } from '../../Decorators/FromJSON';
import CPagSeguroErrorResponse from './CPagSeguroErrorResponse';
import CPagSeguroHolder from './CPagSeguroHolder';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroCardResponse extends CPagSeguroErrorResponse {
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
