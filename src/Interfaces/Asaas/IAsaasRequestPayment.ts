import IAsaasCard from './IAsaasCard';
import IAsaasSplit from './IAsaasSplit';
import IAsaasCreditCardHolderInfo from "./IAsaasCreditCardHolderInfo";
import { TAsaasBilling } from '../../Types/Asaas';
import EnumType from '../../Decorators/EnumType';


export default abstract class IAsaasRequestPayment {
    @EnumType
    billingType: TAsaasBilling;
    value: string;
    description: string;
    externalReference: string;
    creditCardHolderInfo: IAsaasCreditCardHolderInfo;
    customer?: string;
    dueDate?: string;
    remoteIp?: string;
    split?: IAsaasSplit;
    creditCard?: IAsaasCard;
    creditCardToken?: string;

    constructor(
        billingType: TAsaasBilling,
        value: string,
        description: string,
        externalReference: string,
        creditCardHolderInfo: IAsaasCreditCardHolderInfo,
        customer?: string,
        dueDate?: string,
        remoteIp?: string,
        split?: IAsaasSplit,
        creditCard?: IAsaasCard,
        creditCardToken?: string
    ) {
        this.billingType = billingType
        this.value = value
        this.description = description
        this.externalReference = externalReference
        this.creditCardHolderInfo = creditCardHolderInfo
        this.customer = customer
        this.dueDate = dueDate
        this.remoteIp = remoteIp
        this.split = split
        this.creditCard = creditCard
        this.creditCardToken = creditCardToken
    }

}
