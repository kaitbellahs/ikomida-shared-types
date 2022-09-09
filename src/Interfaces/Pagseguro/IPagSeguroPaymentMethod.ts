import IPagSeguroCardResponse from "./IPagSeguroCardResponse";
import IPagSeguroTokenData from "./IPagSeguroTokenData";
import IPagSeguroCard from "./IPagSeguroCard";
import IPagSeguroBoleto from "./IPagSeguroBoleto";
import IPagSeguroAuthenticationMethod from "./IPagSeguroAuthenticationMethod";
import { TPagSeguroPaymentMethod } from "../../Types/Pagseguro";
import EnumType from "../../Decorators/EnumType";
import BaseJSON from "../BaseJSON";


export default abstract class IPagSeguroPaymentMethod extends BaseJSON {
    @EnumType
    type: TPagSeguroPaymentMethod;
    installments: number;
    capture: boolean;
    soft_descriptor: string;
    card?: IPagSeguroCard | IPagSeguroCardResponse;
    token_data?: IPagSeguroTokenData;
    authentication_method?: IPagSeguroAuthenticationMethod;
    boleto?: IPagSeguroBoleto;

    constructor(
        type: TPagSeguroPaymentMethod,
        installments: number,
        capture: boolean,
        soft_descriptor: string,
        card?: IPagSeguroCard,
        token_data?: IPagSeguroTokenData,
        authentication_method?: IPagSeguroAuthenticationMethod,
        boleto?: IPagSeguroBoleto
    ) {
        super()
        this.type = type
        this.installments = installments
        this.capture = capture
        this.soft_descriptor = soft_descriptor
        this.card = card
        this.token_data = token_data
        this.authentication_method = authentication_method
        this.boleto = boleto
    }

}
