import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class IOtimaTelResponse extends BaseJSON {
  @Property
  status?: string;
  @Property
  message?: {
    id?: string;
  }
}
