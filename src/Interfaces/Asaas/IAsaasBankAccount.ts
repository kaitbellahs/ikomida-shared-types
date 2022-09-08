import IAsaasBank from "./IAsaasBank";

export default interface IAsaasBankAccount {
    bank: IAsaasBank;
    accountName: string;
    ownerName: string;
    cpfCnpj: string;
    agency: string;
    account: string;
    accountDigit: string;
    pixAddressKey: string;
}
