import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class IBusinessTimeHours extends BaseJSON {
  @Property
  start?: string;
  @Property
  end?: string;
}
