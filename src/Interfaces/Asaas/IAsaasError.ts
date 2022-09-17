import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasError extends BaseJSON {
  @Property
  code?: string;
  @Property
  description?: string;
}
