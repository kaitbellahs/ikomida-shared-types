import { FromJSON } from '../../Decorators/FromJSON';
import CAsaasErrors from './CAsaasErrors';
import CAsaasPayment from './CAsaasPayment';
import { Property } from '../../Decorators/Property';

export default class CAsaasPaymentsResponse extends CAsaasErrors {
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
  @FromJSON(CAsaasPayment)
  data?: CAsaasPayment[];
}
