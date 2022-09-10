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
}
