import EnumType from "../../Decorators/EnumType";
import { TAsaasStatment } from "../../Types/Asaas";
import BaseJSON from "../BaseJSON";

export default abstract class IAsaasStatment extends BaseJSON {
    object: string;
    id: string;
    value: number;
    balance: number;
    @EnumType
    type: TAsaasStatment;
    date: string;
    description?: string;
    paymentID?: string;
    transferID?: string;
    anticipationID?: string;
    billID?: string;
    invoiceID?: string;
    paymentDunningID?: string;
    creditBureauReportID?: string;

    constructor(
        object: string,
        id: string,
        value: number,
        balance: number,
        type: TAsaasStatment,
        date: string,
        description?: string,
        paymentID?: string,
        transferID?: string,
        anticipationID?: string,
        billID?: string,
        invoiceID?: string,
        paymentDunningID?: string,
        creditBureauReportID?: string
    ) {
        super()
        this.object = object
        this.id = id
        this.value = value
        this.balance = balance
        this.type = type
        this.date = date
        this.description = description
        this.paymentID = paymentID
        this.transferID = transferID
        this.anticipationID = anticipationID
        this.billID = billID
        this.invoiceID = invoiceID
        this.paymentDunningID = paymentDunningID
        this.creditBureauReportID = creditBureauReportID
    }

}
