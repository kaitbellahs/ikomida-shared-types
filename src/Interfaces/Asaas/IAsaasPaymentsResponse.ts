import { FromJSON } from '../../Decorators/FromJSON';
import IAsaasErrors from './IAsaasErrors';
import IAsaasPayment from './IAsaasPayment';
import { Property } from '../../Decorators/Property';

export default class IAsaasPaymentsResponse extends IAsaasErrors {
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
  @FromJSON(IAsaasPayment)
  data?: IAsaasPayment[];
}
