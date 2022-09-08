import { TCompany } from "../../Types";

export default interface INewAccountRequest {
    name: string;
    email: string;
    cpfCnpj: string;
    birthDate: string;
    companyType: TCompany;
    phone: string;
    mobilePhone: string;
    address: string;
    addressNumber: string;
    complement?: string;
    province: string;
    postalCode: string;
}
