import BaseType from './BaseType';

export default class PagSeguroPaymentStatus extends BaseType {
  static AUTHORIZED = 'AUTHORIZED';
  static PAID = 'PAID';
  static DECLINED = 'DECLINED';
  static CANCELED = 'CANCELED';
  static ONRETURN = 'ONRETURN';
  static IN_DISPUTE = 'IN_DISPUTE';
  static WAITING = 'WAITING';
  static INANALYSE = 'INANALYSE';
  static IN_CONTESTATION = 'IN_CONTESTATION';
  static CHARGEBACK = 'CHARGEBACK';
  static REFUNDED = 'REFUNDED';
  static TEMPORARY_RETENTION = 'TEMPORARY_RETENTION';
  static UNKNOWN = 'UNKNOWN';
}
