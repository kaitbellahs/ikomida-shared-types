import IPagSeguroSummary from "./IPagSeguroSummary";


export default interface IPagSeguroAmount {
    value: number;
    currency: string;
    summary?: IPagSeguroSummary;
}
