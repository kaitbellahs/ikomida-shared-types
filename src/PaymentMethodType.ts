import BaseType from './BaseType';

export default class PaymentMethodType extends BaseType {
  constructor(type: string) {
    super(type);
    switch (type) {
      case PaymentMethodType.CASH_ON_DELIVERY:
        this.name = 'dinheiro';
        this.description = 'entrega';
        break;
      case PaymentMethodType.CREDIT_CARD_ON_DELIVERY:
        this.name = 'cartão de crédito';
        this.description = 'entrega';
        break;
      case PaymentMethodType.DEBT_CARD_ON_DELIVERY:
        this.name = 'cartão de débito';
        this.description = 'entrega';
        break;
      case PaymentMethodType.CREDIT_CARD_ONLINE:
        this.name = 'cartão de crédito';
        this.description = 'online';
        break;
      case PaymentMethodType.DEBT_CARD_ONLINE:
        this.name = 'cartão de débito';
        this.description = 'online';
        break;
      case PaymentMethodType.PIX_ON_DELIVERY:
        this.name = 'PIX';
        this.description = 'entrega';
        break;
      case PaymentMethodType.PIX_ONLINE:
        this.name = 'online';
        this.description = 'online';
        break;
      default:
        this.name = '-';
        this.description = '-';
        break;
    }
  }

  static CASH_ON_DELIVERY = 'CASH_ON_DELIVERY';
  static CREDIT_CARD_ON_DELIVERY = 'CREDIT_CARD_ON_DELIVERY';
  static DEBT_CARD_ON_DELIVERY = 'DEBT_CARD_ON_DELIVERY';
  static CREDIT_CARD_ONLINE = 'CREDIT_CARD_ONLINE';
  static DEBT_CARD_ONLINE = 'DEBT_CARD_ONLINE';
  static PIX_ON_DELIVERY = 'PIX_ON_DELIVERY';
  static PIX_ONLINE = 'PIX_ONLINE';
}
