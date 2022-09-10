import { Enum } from '../../Decorators/Enum';
import { TAsaasTransferOperation, TAsaasTransferStatus } from '../../Types/Asaas';
import IAsaasBankAccount from './IAsaasBankAccount';
import IAsaasError from './IAsaasError';
import IAsaasErrors from './IAsaasErrors';

export default class IAsaasTransferResponse extends IAsaasErrors {
  object?: string;
  id?: string;
  type?: string;
  dateCreated?: Date;
  bankAccount?: IAsaasBankAccount;
  value?: number;
  netValue?: number;
  @Enum
  status?: TAsaasTransferStatus;
  transferFee?: number;
  effectiveDate?: string;
  endToEndIdentifier?: string;
  scheduleDate?: string;
  authorized?: boolean;
  failReason?: string;
  @Enum
  operationType?: TAsaasTransferOperation;
  description?: string;
  transactionReceiptUrl?: string;
}
