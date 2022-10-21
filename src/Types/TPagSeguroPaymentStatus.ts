import TBaseType from './TBaseType.js'

export default class TPagSeguroPaymentStatus extends TBaseType {
  static AUTHORIZED = new TPagSeguroPaymentStatus('AUTHORIZED')
  static PAID = new TPagSeguroPaymentStatus('PAID')
  static DECLINED = new TPagSeguroPaymentStatus('DECLINED')
  static CANCELED = new TPagSeguroPaymentStatus('CANCELED')
  static ONRETURN = new TPagSeguroPaymentStatus('ONRETURN')
  static IN_DISPUTE = new TPagSeguroPaymentStatus('IN_DISPUTE')
  static WAITING = new TPagSeguroPaymentStatus('WAITING')
  static INANALYSE = new TPagSeguroPaymentStatus('INANALYSE')
  static IN_CONTESTATION = new TPagSeguroPaymentStatus('IN_CONTESTATION')
  static CHARGEBACK = new TPagSeguroPaymentStatus('CHARGEBACK')
  static REFUNDED = new TPagSeguroPaymentStatus('REFUNDED')
  static TEMPORARY_RETENTION = new TPagSeguroPaymentStatus('TEMPORARY_RETENTION')
  static UNKNOWN = new TPagSeguroPaymentStatus('UNKNOWN')
}
