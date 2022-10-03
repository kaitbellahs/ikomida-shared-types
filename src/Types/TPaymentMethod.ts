import { TPagSeguroPaymentMethod } from './Pagseguro';
import TBaseType from './TBaseType';

export default class TPaymentMethod extends TBaseType {
  static CASH_ON_DELIVERY = new TPaymentMethod('CASH_ON_DELIVERY');
  static CREDIT_CARD_ON_DELIVERY = new TPaymentMethod('CREDIT_CARD_ON_DELIVERY');
  static DEBT_CARD_ON_DELIVERY = new TPaymentMethod('DEBT_CARD_ON_DELIVERY');
  static CREDIT_CARD_ONLINE = new TPaymentMethod('CREDIT_CARD_ONLINE');
  static DEBT_CARD_ONLINE = new TPaymentMethod('DEBT_CARD_ONLINE');
  static PIX_ON_DELIVERY = new TPaymentMethod('PIX_ON_DELIVERY');
  static PIX_ONLINE = new TPaymentMethod('PIX_ONLINE');

  constructor(type: string) {
    super(type);
    switch (type) {
      case 'CASH_ON_DELIVERY':
        this.name = 'dinheiro';
        this.description = 'entrega';
        break;
      case 'CREDIT_CARD_ON_DELIVERY':
        this.name = 'cartão de crédito';
        this.description = 'entrega';
        break;
      case 'DEBT_CARD_ON_DELIVERY':
        this.name = 'cartão de débito';
        this.description = 'entrega';
        break;
      case 'CREDIT_CARD_ONLINE':
        this.name = 'cartão de crédito';
        this.description = 'online';
        break;
      case 'DEBT_CARD_ONLINE':
        this.name = 'cartão de débito';
        this.description = 'online';
        break;
      case 'PIX_ON_DELIVERY':
        this.name = 'PIX';
        this.description = 'entrega';
        break;
      case 'PIX_ONLINE':
        this.name = 'online';
        this.description = 'online';
        break;
      default:
        this.name = '-';
        this.description = '-';
        break;
    }
  }
  get pagseguro(): TPagSeguroPaymentMethod {
    switch (this) {
      case TPaymentMethod.CREDIT_CARD_ONLINE:
        return TPagSeguroPaymentMethod.CREDIT_CARD;
      case TPaymentMethod.DEBT_CARD_ONLINE:
        return TPagSeguroPaymentMethod.DEBIT_CARD;
      default:
        return TPagSeguroPaymentMethod.CREDIT_CARD;
    }
  }
}
