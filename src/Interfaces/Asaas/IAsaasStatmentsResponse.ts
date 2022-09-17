import { FromJSON } from '../../Decorators/FromJSON';
import IAsaasErrors from './IAsaasErrors';
import IAsaasStatment from './IAsaasStatment';
import { Property } from '../../Decorators/Property';

export default class IAsaasStatmentsResponse extends IAsaasErrors {
  @Property
  object?: string;
  @Property
  hasMore?: boolean;
  @Property
  totalCount?: number;
  @Property
  limit?: number;
  @Property
  offset?: number;
  @Property
  @FromJSON(IAsaasStatment)
  data?: IAsaasStatment[];
}
