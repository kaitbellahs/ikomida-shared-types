import BaseType from './BaseType';

export default class OrderStatusType extends BaseType {
  static CANCELED = 'CANCELED';
  static WAITING_PAYMENT = 'WAITING_PAYMENT';
  static OPEN = 'OPEN';
  static ACCEPTED = 'ACCEPTED';
  static WAITING_DELIVERY = 'WAITING_DELIVERY';
  static IN_DELIVERY = 'IN_DELIVERY';
  static DELIVERED = 'DELIVERED';
  static IN_DISPUTE = 'IN_DISPUTE';
}
