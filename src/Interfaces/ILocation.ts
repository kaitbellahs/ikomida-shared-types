import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class ILocation extends BaseJSON {
  @Property
  latitude?: string;
  @Property
  longitude?: string;
}
