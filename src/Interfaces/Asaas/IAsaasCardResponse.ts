import IAsaasErrors from "./IAsaasErrors";

export default interface IAsaasCardResponse extends IAsaasErrors {
    creditCardNumber: string;
    creditCardBrand: string;
    creditCardToken: string;
}
