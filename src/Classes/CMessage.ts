import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CMessage extends BaseJSON {
  @Property
  subject?: string;
  @Property
  body?: string;
}
