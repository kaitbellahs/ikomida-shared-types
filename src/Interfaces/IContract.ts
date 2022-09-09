import IAddress from "./IAddress";
import IApp from "./IApp";
import IPlan from "./IPlan";

export default interface IContract {
    id?: string;
    ikomidaID?: string;
    contractName?: string;
    status?: string;
    termId?: string;
    name?: string;
    lastName?: string;
    cnpj?: string;
    cpf?: string;
    email?: string;
    phone?: string;
    password?: string;
    address?: IAddress;
    areaCode?: number;
    referredBy?: string;
    plan?: IPlan;
    apps?: IApp[];
    phoneValidationCode?: number;
    signature?: string;
    payment?: {
        name?: string;
        number?: number;
        validity?: string;
        code?: number;
    };
    createdAt?: Date
    timestamp?: number
}
