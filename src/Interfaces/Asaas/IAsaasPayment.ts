import IAsaasCardResponse from "./IAsaasCardResponse";
import IAsaasRefund from "./IAsaasRefund";
import IAsaasFine from "./IAsaasFine";
import IAsaasDiscount from "./IAsaasDiscount";
import { TAsaasBilling } from "../../Types/Asaas";
import EnumType from "../../Decorators/EnumType";
import BaseJSON from "../BaseJSON";


export default abstract class IAsaasPayment extends BaseJSON {
    object: string;
    id: string;
    dateCreated: string;
    customer: string;
    value: number;
    netValue: number;
    @EnumType
    billingType: TAsaasBilling;
    status: string;
    dueDate: string;
    originalDueDate: string;
    invoiceURL: string;
    invoiceNumber: string;
    deleted: boolean;
    postalService: boolean;
    anticipated: boolean;
    originalValue?: number;
    interestValue?: number;
    description?: string;
    paymentLink?: string;
    canBePaidAfterDueDate?: boolean;
    pixTransaction?: string;
    paymentDate?: string;
    clientPaymentDate?: string;
    installmentNumber?: number;
    transactionReceiptURL?: string;
    nossoNumero?: string;
    externalReference?: string;
    bankSlipURL?: string;
    refunds?: IAsaasRefund[];
    confirmedDate?: string;
    creditDate?: string;
    estimatedCreditDate?: string;
    lastInvoiceViewedDate?: string;
    lastBankSlipViewedDate?: string;
    discount?: IAsaasDiscount;
    fine?: IAsaasFine;
    interest?: IAsaasFine;
    creditCard?: IAsaasCardResponse;

    constructor(
        object: string,
        id: string,
        dateCreated: string,
        customer: string,
        value: number,
        netValue: number,
        billingType: TAsaasBilling,
        status: string,
        dueDate: string,
        originalDueDate: string,
        invoiceURL: string,
        invoiceNumber: string,
        deleted: boolean,
        postalService: boolean,
        anticipated: boolean,
        originalValue?: number,
        interestValue?: number,
        description?: string,
        paymentLink?: string,
        canBePaidAfterDueDate?: boolean,
        pixTransaction?: string,
        paymentDate?: string,
        clientPaymentDate?: string,
        installmentNumber?: number,
        transactionReceiptURL?: string,
        nossoNumero?: string,
        externalReference?: string,
        bankSlipURL?: string,
        refunds?: IAsaasRefund[],
        confirmedDate?: string,
        creditDate?: string,
        estimatedCreditDate?: string,
        lastInvoiceViewedDate?: string,
        lastBankSlipViewedDate?: string,
        discount?: IAsaasDiscount,
        fine?: IAsaasFine,
        interest?: IAsaasFine,
        creditCard?: IAsaasCardResponse
    ) {
        super()
        this.object = object
        this.id = id
        this.dateCreated = dateCreated
        this.customer = customer
        this.value = value
        this.netValue = netValue
        this.billingType = billingType
        this.status = status
        this.dueDate = dueDate
        this.originalDueDate = originalDueDate
        this.invoiceURL = invoiceURL
        this.invoiceNumber = invoiceNumber
        this.deleted = deleted
        this.postalService = postalService
        this.anticipated = anticipated
        this.originalValue = originalValue
        this.interestValue = interestValue
        this.description = description
        this.paymentLink = paymentLink
        this.canBePaidAfterDueDate = canBePaidAfterDueDate
        this.pixTransaction = pixTransaction
        this.paymentDate = paymentDate
        this.clientPaymentDate = clientPaymentDate
        this.installmentNumber = installmentNumber
        this.transactionReceiptURL = transactionReceiptURL
        this.nossoNumero = nossoNumero
        this.externalReference = externalReference
        this.bankSlipURL = bankSlipURL
        this.refunds = refunds
        this.confirmedDate = confirmedDate
        this.creditDate = creditDate
        this.estimatedCreditDate = estimatedCreditDate
        this.lastInvoiceViewedDate = lastInvoiceViewedDate
        this.lastBankSlipViewedDate = lastBankSlipViewedDate
        this.discount = discount
        this.fine = fine
        this.interest = interest
        this.creditCard = creditCard
    }

}
