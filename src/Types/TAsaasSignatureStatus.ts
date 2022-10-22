import TBaseType from './TBaseType.js'

export default class TAsaasSignatureStatus extends TBaseType {
  static ACTIVE = new TAsaasSignatureStatus('ACTIVE')
  static CONFIRMED = new TAsaasSignatureStatus('CONFIRMED')
  static AVAILABLE = new TAsaasSignatureStatus('AVAILABLE')
  static CANCELED = new TAsaasSignatureStatus('CANCELED')
  static IN_DISPUTE = new TAsaasSignatureStatus('IN_DISPUTE')

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'ACTIVE':
        this.description = 'Ativo'
        break
      case 'CONFIRMED':
        this.description = 'Confirmado'
        break
      case 'AVAILABLE':
        this.description = 'Disponível'
        break
      case 'CANCELED':
        this.description = 'Cancelado'
        break
      case 'IN_DISPUTE':
        this.description = 'Em disputa '
        break
      default:
        this.description = '-'
        break
    }
  }
}
