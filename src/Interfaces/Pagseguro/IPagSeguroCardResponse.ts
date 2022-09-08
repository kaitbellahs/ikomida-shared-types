import IPagseguroErrorMessage from "./IPagseguroErrorMessage";
import IPagSeguroHolder from "./IPagSeguroHolder";

export default interface IPagSeguroCardResponse extends IPagseguroErrorMessage {
    brand: string;
    first_digits: string;
    last_digits: string;
    exp_month: string;
    exp_year: string;
    holder: IPagSeguroHolder;
}
