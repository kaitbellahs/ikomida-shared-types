import IAsaasCustomer from './IAsaasCustomer';


export default interface IAsaasNewCustomer extends IAsaasCustomer {
    externalReference?: string;
    observations?: string;
}
