import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IAsaasStatistics extends BaseJSON {
  @Property
  quantity?: number;
  @Property
  value?: number;
  @Property
  netValue?: number;
}
