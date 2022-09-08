import IPagSeguroAddress from "./IPagSeguroAddress";


export default interface IPagSeguroBoletoHolder {
    address: IPagSeguroAddress;
    name: string;
    tax_id: string;
    email: string;
}
