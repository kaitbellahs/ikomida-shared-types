import IAsaasPaymentCustomer from './IAsaasPaymentCustomer';
import IAsaasCard from './IAsaasCard';
import { TAsaasBilling } from '../../Types/Asaas';
import EnumType from '../../Decorators/EnumType';
import BaseJSON from '../BaseJSON';

interface IPagSeguroPayment {
    code: string;
}

export default abstract class IAsaasCreatePayment extends BaseJSON {
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
        super()
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
