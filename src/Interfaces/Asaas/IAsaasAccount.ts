import { TCompany } from '../../Types';
import IAsaasCustomer from './IAsaasCustomer';

export default interface IAsaasAccount extends IAsaasCustomer {
    birthDate: string;
    companyType: TCompany;
}
