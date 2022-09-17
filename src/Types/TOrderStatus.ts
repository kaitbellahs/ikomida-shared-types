import TBaseType from './TBaseType';

export default class TOrderStatus extends TBaseType {
  static CANCELED = new TOrderStatus('CANCELED');
  static WAITING_PAYMENT = new TOrderStatus('WAITING_PAYMENT');
  static OPEN = new TOrderStatus('OPEN');
  static ACCEPTED = new TOrderStatus('ACCEPTED');
  static WAITING_DELIVERY = new TOrderStatus('WAITING_DELIVERY');
  static IN_DELIVERY = new TOrderStatus('IN_DELIVERY');
  static DELIVERED = new TOrderStatus('DELIVERED');
  static IN_DISPUTE = new TOrderStatus('IN_DISPUTE');
  constructor(type: string) {
    super(type);
    switch (type) {
      case 'WAITING_PAYMENT':
        this.name = 'aguardando pagamento';
        break;
      case 'OPEN':
        this.name = 'aguardando aprovação';
        break;
      case 'ACCEPTED':
        this.name = 'em preparação';
        break;
      case 'WAITING_DELIVERY':
        this.name = 'esperando o entregador';
        break;
      case 'IN_DELIVERY':
        this.name = 'a caminho do cliente';
        break;
      case 'DELIVERED':
        this.name = 'entregue';
        break;
      case 'CANCELED':
        this.name = 'cancelado';
        break;
      case 'IN_DISPUTE':
        this.name = 'em disputa';
        break;
    }
    this.description = this.name;
  }
}
