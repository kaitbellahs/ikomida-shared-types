import { TPIX } from "../../Types";

export default interface IAsaasTransferRequest {
    pixAddressKeyType: TPIX;
    value: number;
    description?: string;
    pixAddressKey: string;
    scheduleDate?: string;
}
