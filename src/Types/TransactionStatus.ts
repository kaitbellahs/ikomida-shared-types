import TBaseType from './TBaseType.js'

export default class TransactionStatus extends TBaseType {
  static PENDING = new TransactionStatus('PENDING')
  static ANALISE = new TransactionStatus('ANALISE')
  static APROVED = new TransactionStatus('APROVED')
  static REJECTED = new TransactionStatus('REJECTED')

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'PENDING':
        this.name = 'aguardando'
        this.description = 'aguardando analise'
        break
      case 'ANALISE':
        this.name = 'em analise'
        this.description = 'em analise'
        break
      case 'APROVED':
        this.name = 'aprovado'
        this.description = 'aprovado'
        break
      case 'REJECTED':
        this.name = 'rejeitado'
        this.description = 'rejeitado'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}
