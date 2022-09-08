import IAsaasSplit from './IAsaasSplit';
import IAsaasDiscount from './IAsaasDiscount';
import IAsaasFine from './IAsaasFine';
import IAsaasErrors from './IAsaasErrors';
import IAsaasCardResponse from "./IAsaasCardResponse";
import { TAsaasBilling, TAsaasSubscriptionStatus } from '../../Types/Asaas';
import EnumType from '../../Decorators/EnumType';
import IAsaasError from './IAsaasError';

export default abstract class IAsaasCreateSubscriptionResponse extends IAsaasErrors {
    object: string;
    id: string;
    dateCreated: Date;
    customer: string;
    @EnumType
    billingType: TAsaasBilling;
    cycle: string;
    value: number;
    nextDueDate: string;
    @EnumType
    status: TAsaasSubscriptionStatus;
    deleted: boolean;
    creditCard: IAsaasCardResponse;
    paymentLink?: string;
    discount?: IAsaasDiscount;
    fine?: IAsaasFine;
    interest?: IAsaasFine;
    description?: string;
    endDate?: string;
    maxPayments?: number;
    split?: IAsaasSplit;

    constructor(
        object: string,
        id: string,
        dateCreated: Date,
        customer: string,
        billingType: TAsaasBilling,
        cycle: string,
        value: number,
        nextDueDate: string,
        status: TAsaasSubscriptionStatus,
        deleted: boolean,
        creditCard: IAsaasCardResponse,
        paymentLink?: string,
        discount?: IAsaasDiscount,
        fine?: IAsaasFine,
        interest?: IAsaasFine,
        description?: string,
        endDate?: string,
        maxPayments?: number,
        split?: IAsaasSplit,
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
        this.status = status
        this.deleted = deleted
        this.creditCard = creditCard
        this.paymentLink = paymentLink
        this.discount = discount
        this.fine = fine
        this.interest = interest
        this.description = description
        this.endDate = endDate
        this.maxPayments = maxPayments
        this.split = split
    }

}
