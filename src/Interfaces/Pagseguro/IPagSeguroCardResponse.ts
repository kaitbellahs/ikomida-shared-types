import IPagseguroErrorMessage from './IPagseguroErrorMessage';
import IPagSeguroHolder from './IPagSeguroHolder';

export default class IPagSeguroCardResponse extends IPagseguroErrorMessage {
  id?: string;
  brand?: string;
  first_digits?: string;
  last_digits?: string;
  exp_month?: string;
  exp_year?: string;
  holder?: IPagSeguroHolder;
}
