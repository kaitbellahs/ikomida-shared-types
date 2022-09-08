import IAsaasCustomer from './IAsaasCustomer';


export default interface IAsaasPaymentCustomer extends IAsaasCustomer {
    id?: string;
    ip: string;
}
