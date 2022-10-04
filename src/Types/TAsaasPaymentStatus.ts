import TBaseType from './TBaseType'

export default class TAsaasPaymentStatus extends TBaseType {
  static PENDING = new TAsaasPaymentStatus('PENDING')
  static CONFIRMED = new TAsaasPaymentStatus('CONFIRMED')
  static RECEIVED = new TAsaasPaymentStatus('RECEIVED')
  static RECEIVED_IN_CASH = new TAsaasPaymentStatus('RECEIVED_IN_CASH')
  static OVERDUE = new TAsaasPaymentStatus('OVERDUE')
  static REFUND_REQUESTED = new TAsaasPaymentStatus('REFUND_REQUESTED')
  static REFUNDED = new TAsaasPaymentStatus('REFUNDED')
  static CHARGEBACK_REQUESTED = new TAsaasPaymentStatus('CHARGEBACK_REQUESTED')
  static CHARGEBACK_DISPUTE = new TAsaasPaymentStatus('CHARGEBACK_DISPUTE')
  static AWAITING_CHARGEBACK_REVERSAL = new TAsaasPaymentStatus('AWAITING_CHARGEBACK_REVERSAL')
  static DUNNING_REQUESTED = new TAsaasPaymentStatus('DUNNING_REQUESTED')
  static DUNNING_RECEIVED = new TAsaasPaymentStatus('DUNNING_RECEIVED')
  static AWAITING_RISK_ANALYSIS = new TAsaasPaymentStatus('AWAITING_RISK_ANALYSIS')
  static CANCELED = new TAsaasPaymentStatus('CANCELED')
}
