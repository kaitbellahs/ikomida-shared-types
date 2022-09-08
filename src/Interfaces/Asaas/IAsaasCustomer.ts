import IAsaasAddress from './IAsaasAddress';


export default interface IAsaasCustomer {
    address: IAsaasAddress;
    name: string;
    email: string;
    phone: string;
    identity: string;
}
