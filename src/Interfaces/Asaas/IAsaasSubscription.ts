import IAsaasNewCustomer from './IAsaasNewCustomer';
import IAsaasCard from './IAsaasCard';


export default interface IAsaasSubscription {
    plan: {
        price: number;
        name: string;
    };
    payment: IAsaasCard;
    customer: IAsaasNewCustomer;
    ikomidaID: string;
    externalReference?: string;
    observations?: string | null;
}
