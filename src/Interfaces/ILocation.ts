import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class ILocation extends BaseJSON {
  @Property
  latitude?: string;
  @Property
  longitude?: string;
}
