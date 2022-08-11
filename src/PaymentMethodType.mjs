export default class PaymentMethodType {
    description
    name
    constructor(type) {
        this.name = type
        switch (type) {
            case PaymentMethodType.CASH_ON_DELIVERY:
                this.description = 'em dinheiro na entrega'
                break
            case PaymentMethodType.CREDIT_CARD_ON_DELIVERY:
                this.description = 'cartão de crédito na entrega'
                break
            case PaymentMethodType.DEBT_CARD_ON_DELIVERY:
                this.description = 'cartão de débito na entrega';
                break
            case PaymentMethodType.CREDIT_CARD_ONLINE:
                this.description = 'cartão de crédito online';
                break
            case PaymentMethodType.DEBT_CARD_ONLINE:
                this.description = 'cartão de débito online'
                break
            case PaymentMethodType.PIX_ON_DELIVERY:
                this.description = 'PIX na entrega'
                break
            case PaymentMethodType.PIX_ONLINE:
                this.description = 'PIX online'
                break
            default:
                this.description = '-'
                break
        }
    }

    static CASH_ON_DELIVERY = 'CASH_ON_DELIVERY';
    static CREDIT_CARD_ON_DELIVERY = 'CREDIT_CARD_ON_DELIVERY';
    static DEBT_CARD_ON_DELIVERY = 'DEBT_CARD_ON_DELIVERY';
    static CREDIT_CARD_ONLINE = 'CREDIT_CARD_ONLINE';
    static DEBT_CARD_ONLINE = 'DEBT_CARD_ONLINE';
    static PIX_ON_DELIVERY = 'PIX_ON_DELIVERY';
    static PIX_ONLINE = 'PIX_ONLINE';

    static keys = Object.keys(PaymentMethodType);
    static list = PaymentMethodType.keys.map((item) => {
        return {
            id: item,
            name: PaymentMethodType[item]
        };
    });
}