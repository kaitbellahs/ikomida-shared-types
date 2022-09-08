import { TCompany, TPerson } from '../../Types';
import IAsaasAccountNumber from './IAsaasAccountNumber';
import IAsaasErrors from './IAsaasErrors';

export default interface IAsaasNewAccountResponse extends IAsaasErrors {
    object: string;
    id: string;
    name: string;
    email: string;
    loginEmail: string;
    phone: string;
    mobilePhone: string;
    address: string;
    addressNumber: string;
    complement: string;
    province: string;
    postalCode: string;
    cpfCnpj: string;
    birthDate: string;
    personType: TPerson;
    companyType: TCompany;
    city: number;
    state: string;
    country: string;
    apiKey: string;
    walletId: string;
    accountNumber: IAsaasAccountNumber;
}
