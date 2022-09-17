import { Enum } from '../../Decorators/Enum';
import { FromJSON } from '../../Decorators/FromJSON';
import { TAsaasTransferOperation, TAsaasTransferStatus } from '../../Types/Asaas';
import IAsaasBankAccount from './IAsaasBankAccount';
import IAsaasErrors from './IAsaasErrors';
import { Property } from '../../Decorators/Property';

export default class IAsaasTransferResponse extends IAsaasErrors {
  @Property
  object?: string;
  @Property
  id?: string;
  @Property
  type?: string;
  @Property
  @FromJSON
  dateCreated?: Date;;
  @Property
  @FromJSON
  bankAccount?: IAsaasBankAccount;
  @Property
  value?: number;;
  @Property
  netValue?: number;;
  @Property
  @Enum
  status?: TAsaasTransferStatus
  @Property
  transferFee?: number;
  @Property
  effectiveDate?: string
  @Property
  endToEndIdentifier?: string
  @Property
  scheduleDate?: string;;
  @Property
  authorized?: boolean;
  @Property
  failReason?: string;
  @Enum
  operationType?: TAsaasTransferOperation;
  @Property
  description?: string;
  @Property
  transactionReceiptUrl?: string;
}
