import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class ICreditCardRequest extends BaseJSON {
  @Property
  number!: number;
  @Property
  validity!: string;
  @Property
  code!: number;
  @Property
  holder!: string;
}
