import IAsaasPaymentCustomer from './IAsaasPaymentCustomer';
import IAsaasCard from './IAsaasCard';
import { TAsaasBilling } from '../../Types/Asaas';
import EnumType from '../../Decorators/EnumType';

interface IPagSeguroPayment {
    code: string;
}

export default abstract class IAsaasCreatePayment {
    customer: IAsaasPaymentCustomer;
    @EnumType
    type: TAsaasBilling;
    amount: number;
    description: string;
    reference: string;
    walletId: string;
    payment: IPagSeguroPayment;
    creditCard?: IAsaasCard;
    creditCardToken?: string;

    constructor(
        customer: IAsaasPaymentCustomer,
        type: TAsaasBilling,
        amount: number,
        description: string,
        reference: string,
        walletId: string,
        payment: IPagSeguroPayment,
        creditCard?: IAsaasCard,
        creditCardToken?: string
    ) {
        this.customer = customer
        this.type = type
        this.amount = amount
        this.description = description
        this.reference = reference
        this.walletId = walletId
        this.payment = payment
        this.creditCard = creditCard
        this.creditCardToken = creditCardToken
    }

}
