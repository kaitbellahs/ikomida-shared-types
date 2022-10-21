import TBaseType from './TBaseType.js'

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

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'PENDING':
        this.description = 'Pendente'
        break
      case 'CONFIRMED':
        this.description = 'Confirmado'
        break
      case 'RECEIVED':
        this.description = 'Recebido'
        break
      case 'RECEIVED_IN_CASH':
        this.description = 'Recebido em cash'
        break
      case 'OVERDUE':
        this.description = 'Atrasado'
        break
      case 'REFUND_REQUESTED':
        this.description = 'Reembolso solicitado'
        break
      case 'REFUNDED':
        this.description = 'Reembolsado'
        break
      case 'CHARGEBACK_REQUESTED':
        this.description = 'Estorno solicitado'
        break
      case 'CHARGEBACK_DISPUTE':
        this.description = 'Estorno em disputa'
        break
      case 'AWAITING_CHARGEBACK_REVERSAL':
        this.description = 'Aguardando recurso de estorno'
        break
      case 'DUNNING_REQUESTED':
        this.description = 'Cobrança solicitada'
        break
      case 'DUNNING_RECEIVED':
        this.description = 'Cobrança recebida'
        break
      case 'AWAITING_RISK_ANALYSIS':
        this.description = 'Aguardando análise de risco'
        break
      case 'CANCELED':
        this.description = 'Cancelado'
        break
      default:
        this.description = '-'
        break
    }
  }
}
