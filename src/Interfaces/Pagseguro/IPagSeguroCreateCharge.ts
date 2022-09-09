import EnumType from "../../Decorators/EnumType";
import { TPagSeguroPaymentMethod } from "../../Types/Pagseguro";
import IAsaasCard from "../Asaas/IAsaasCard";
import BaseJSON from "../BaseJSON";

interface IPagseguroCreateChargeConfig {
    host: string;
    uri: string;
}
export default abstract class IPagSeguroCreateCharge extends BaseJSON {
    reference: string;
    amount: number;
    @EnumType
    type: TPagSeguroPaymentMethod;
    statementID: string;
    config: IPagseguroCreateChargeConfig;
    contractID: string;
    card?: IAsaasCard;
    cardToken?: string;
    description?: string;

    constructor(
        reference: string,
        amount: number,
        type: TPagSeguroPaymentMethod,
        statementID: string,
        config: IPagseguroCreateChargeConfig,
        contractID: string,
        card?: IAsaasCard,
        cardToken?: string,
        description?: string
    ) {
        super()
        this.reference = reference
        this.amount = amount
        this.type = type
        this.statementID = statementID
        this.config = config
        this.contractID = contractID
        this.card = card
        this.cardToken = cardToken
        this.description = description
    }

}
