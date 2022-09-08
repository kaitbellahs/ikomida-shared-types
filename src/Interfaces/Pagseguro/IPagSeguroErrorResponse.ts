import IPagseguroErrorMessage from "./IPagseguroErrorMessage";

export default interface IPagSeguroErrorResponse {
    error_messages: IPagseguroErrorMessage[];
}
