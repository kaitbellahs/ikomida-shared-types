import IPagSeguroCardHolder from "./IPagSeguroCardHolder";


export default interface IPagSeguroCard {
    holder?: IPagSeguroCardHolder;
    id?: string;
    number?: number;
    network_token?: string;
    exp_month?: number;
    exp_year?: number;
    security_code?: number;
    store?: boolean;
}
