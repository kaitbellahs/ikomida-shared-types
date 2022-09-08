import IAsaasCard from './IAsaasCard';
import IAsaasSplit from './IAsaasSplit';
import IAsaasDiscount from './IAsaasDiscount';
import IAsaasFine from './IAsaasFine';
import IAsaasCreditCardHolderInfo from "./IAsaasCreditCardHolderInfo";
import { TAsaasBilling } from '../../Types/Asaas';
import EnumType from '../../Decorators/EnumType';


export default abstract class IAsaasCreateSubscriptionRequest {
    customer: string;
    @EnumType
    billingType: TAsaasBilling;
    nextDueDate: string;
    value: number;
    cycle: string;
    creditCardHolderInfo: IAsaasCreditCardHolderInfo;
    remoteIp: string;
    creditCardToken?: string;
    split?: IAsaasSplit;
    discount?: IAsaasDiscount;
    fine?: IAsaasFine;
    interest?: IAsaasFine;
    description?: string;
    endDate?: string;
    maxPayments?: number;
    creditCard?: IAsaasCard;
    externalReference?: string;

    constructor(
        customer: string,
        billingType: TAsaasBilling,
        nextDueDate: string,
        value: number,
        cycle: string,
        creditCardHolderInfo: IAsaasCreditCardHolderInfo,
        remoteIp: string,
        creditCardToken?: string,
        split?: IAsaasSplit,
        discount?: IAsaasDiscount,
        fine?: IAsaasFine,
        interest?: IAsaasFine,
        description?: string,
        endDate?: string,
        maxPayments?: number,
        creditCard?: IAsaasCard,
        externalReference?: string
    ) {
        this.customer = customer
        this.billingType = billingType
        this.nextDueDate = nextDueDate
        this.value = value
        this.cycle = cycle
        this.creditCardHolderInfo = creditCardHolderInfo
        this.remoteIp = remoteIp
        this.creditCardToken = creditCardToken
        this.split = split
        this.discount = discount
        this.fine = fine
        this.interest = interest
        this.description = description
        this.endDate = endDate
        this.maxPayments = maxPayments
        this.creditCard = creditCard
        this.externalReference = externalReference
    }

}
