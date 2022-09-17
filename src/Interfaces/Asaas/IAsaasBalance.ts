import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasBalance extends BaseJSON {
  @Property
  balance?: number;
}
