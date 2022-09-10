import IAsaasErrors from './IAsaasErrors';
import IAsaasPayment from './IAsaasPayment';

export default class IAsaasPaymentsResponse extends IAsaasErrors {
  object?: string;
  hasMore?: boolean;
  totalCount?: number;
  limit?: number;
  offset?: number;
  data?: IAsaasPayment[];
}
