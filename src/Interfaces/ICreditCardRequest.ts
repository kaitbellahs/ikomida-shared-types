import BaseJSON from './BaseJSON';

export default class ICreditCardRequest extends BaseJSON {
  number?: number;
  validity?: string;
  code?: number;
  holder?: string;
}
