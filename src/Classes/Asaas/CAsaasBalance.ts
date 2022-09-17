import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CAsaasBalance extends BaseJSON {
  @Property
  balance?: number;
}
