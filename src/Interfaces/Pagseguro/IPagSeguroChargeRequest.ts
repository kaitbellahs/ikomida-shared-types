import IMetadata from '../IMetadata';
import IPagSeguroRecurring from "./IPagSeguroRecurring";
import IPagSeguroPaymentMethod from "./IPagSeguroPaymentMethod";
import IPagSeguroAmount from "./IPagSeguroAmount";


export default interface IPagSeguroChargeRequest {
    amount: IPagSeguroAmount;
    payment_method: IPagSeguroPaymentMethod;
    recurring?: IPagSeguroRecurring;
    notification_urls: string[];
    reference_id: string;
    description?: string;
    metadata?: IMetadata;
}
