import BaseJSON from "../BaseJSON";

export default class IChargeResponse extends BaseJSON {
    id?: string;
    cardId?: string;
    brand?: string;
    firstDigits?: number;
    lastDigits?: number;
    ikomidaID?: string;
    orderID?: string;
    status?: string;
    amount?: number;
}