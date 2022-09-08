import ISubscriptionInterest from "./ISubscriptionInterest";
import ISubscriptionFine from "./ISubscriptionFine";
import ISubscriptionDiscount from "./ISubscriptionDiscount";
import { TAsaasBilling } from "../../Types/Asaas";
import EnumType from "../../Decorators/EnumType";
import IAsaasErrors from "./IAsaasErrors";
import IAsaasError from "./IAsaasError";


export default abstract class ISubscriptionResponse extends IAsaasErrors {
    object: string;
    id: string;
    dateCreated: string;
    customer: string;
    @EnumType
    billingType: TAsaasBilling;
    cycle: string;
    value: number;
    nextDueDate: string;
    description: string;
    status: string;
    discount: ISubscriptionDiscount;
    fine: ISubscriptionFine;
    interest: ISubscriptionInterest;
    deleted: boolean;
    paymentLink?: string;

    constructor(
        object: string,
        id: string,
        dateCreated: string,
        customer: string,
        billingType: TAsaasBilling,
        cycle: string,
        value: number,
        nextDueDate: string,
        description: string,
        status: string,
        discount: ISubscriptionDiscount,
        fine: ISubscriptionFine,
        interest: ISubscriptionInterest,
        deleted: boolean,
        paymentLink?: string,
        errors?: IAsaasError[]
    ) {
        super(errors)
        this.object = object
        this.id = id
        this.dateCreated = dateCreated
        this.customer = customer
        this.billingType = billingType
        this.cycle = cycle
        this.value = value
        this.nextDueDate = nextDueDate
        this.description = description
        this.status = status
        this.discount = discount
        this.fine = fine
        this.interest = interest
        this.deleted = deleted
        this.paymentLink = paymentLink
    }

}
