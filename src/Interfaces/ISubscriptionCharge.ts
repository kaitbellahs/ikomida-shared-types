import { TAsaasPaymentStatus } from "../Types"
import BaseJSON from "./BaseJSON"

export default class ISubscriptionCharge extends BaseJSON {
    value?: number
    creditCardNumber?: number
    creditCardBrand?: string
    dueDate?: Date
    invoiceUrl?: string
    transactionReceiptUrl?: string
    confirmedDate?: Date
    status?: TAsaasPaymentStatus
}