import BaseJSON from './BaseJSON';
import INotificationPayload from './INotificationPayload';


export default class IAMQPPayloadObject extends BaseJSON {
    message?: any;
    userId?: string;
    contractId?: string;
    areaCode?: string
    phone?: string
    platform?: string
}
