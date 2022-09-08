import EnumType from "../../Decorators/EnumType";
import { TAsaasTransferOperation, TAsaasTransferStatus } from "../../Types/Asaas";
import IAsaasBankAccount from "./IAsaasBankAccount";
import IAsaasError from "./IAsaasError";
import IAsaasErrors from "./IAsaasErrors";

export default abstract class IAsaasTransferResponse extends IAsaasErrors {
    object: string;
    id: string;
    type: string;
    dateCreated: Date;
    bankAccount: IAsaasBankAccount;
    value?: number;
    netValue?: number;
    @EnumType
    status?: TAsaasTransferStatus;
    transferFee?: number;
    effectiveDate?: string;
    endToEndIdentifier?: string;
    scheduleDate?: string;
    authorized?: boolean;
    failReason?: string;
    @EnumType
    operationType?: TAsaasTransferOperation;
    description?: string;
    transactionReceiptUrl?: string;

    constructor(
        object: string,
        id: string,
        type: string,
        dateCreated: Date,
        bankAccount: IAsaasBankAccount,
        value?: number,
        netValue?: number,
        status?: TAsaasTransferStatus,
        transferFee?: number,
        effectiveDate?: string,
        endToEndIdentifier?: string,
        scheduleDate?: string,
        authorized?: boolean,
        failReason?: string,
        operationType?: TAsaasTransferOperation,
        description?: string,
        transactionReceiptUrl?: string,
        errors?: IAsaasError[]
    ) {
        super(errors)
        this.object = object
        this.id = id
        this.type = type
        this.dateCreated = dateCreated
        this.bankAccount = bankAccount
        this.value = value
        this.netValue = netValue
        this.status = status
        this.transferFee = transferFee
        this.effectiveDate = effectiveDate
        this.endToEndIdentifier = endToEndIdentifier
        this.scheduleDate = scheduleDate
        this.authorized = authorized
        this.failReason = failReason
        this.operationType = operationType
        this.description = description
        this.transactionReceiptUrl = transactionReceiptUrl
    }

}
