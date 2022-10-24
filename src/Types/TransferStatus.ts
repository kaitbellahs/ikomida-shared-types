import TBaseType from './TBaseType.js'

export default class TransferStatus extends TBaseType {
  static PENDING = new TransferStatus('PENDING')
  static BANK_PROCESSING = new TransferStatus('BANK_PROCESSING')
  static DONE = new TransferStatus('DONE')
  static CANCELLED = new TransferStatus('CANCELLED')
  static FAILED = new TransferStatus('FAILED')

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'PENDING':
        this.name = 'Pendente'
        this.description = 'Pendente'
        break
      case 'BANK_PROCESSING':
        this.name = 'Processando'
        this.description = 'Processando'
        break
      case 'DONE':
        this.name = 'Concluido'
        this.description = 'Concluido'
        break
      case 'CANCELLED':
        this.name = 'Cancelado'
        this.description = 'Cancelado'
        break
      case 'FAILED':
        this.name = 'Falhou'
        this.description = 'Falhou'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}
