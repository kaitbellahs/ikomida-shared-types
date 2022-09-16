import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class IOtimaTelResponse extends BaseJSON {
  @Property
  status?: string;
  @Property
  message?: {
    id?: string;
  }
}
