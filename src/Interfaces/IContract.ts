import IAddress from "./IAddress";

export default interface IContract {
    contractName: string;
    termId: string;
    name: string;
    lastName: string;
    cnpj: string;
    cpf: string;
    email: string;
    phone: string;
    password: string;
    address: IAddress;
    areaCode: string;
    referredBy: string;
    plan: {
        name: string;
        price: number;
    };
    phoneValidationCode?: number;
    signature?: string;
    payment?: {
        name: string;
        number: number;
        validity: string;
        code: number;
    };
}
