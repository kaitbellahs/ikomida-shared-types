import { TPIX } from "../../Types";

export default interface IAsaasTransfer {
    pixAddressKeyType: TPIX;
    amount: number;
    description?: string;
    pixAddressKey: string;
}
