import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IAsaasBalance extends BaseJSON {
  @Property
  balance?: number;
}
