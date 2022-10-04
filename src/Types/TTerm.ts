import TBaseType from './TBaseType'

export default class TTerm extends TBaseType {
  static TERM_OF_USE_VENDOR = new TTerm('TERM_OF_USE_VENDOR')
  static TERM_OF_USE_STAFF = new TTerm('TERM_OF_USE_STAFF')
  static TERM_OF_USE_RESELLER = new TTerm('TERM_OF_USE_RESELLER')
  static TERM_OF_USE_CLIENT = new TTerm('TERM_OF_USE_CLIENT')
  static PRIVACY_POLICY = new TTerm('PRIVACY_POLICY')

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'TERM_OF_USE_VENDOR':
        this.name = ''
        this.description = 'Termo de uso estabelecimentos'
        break
      case 'TERM_OF_USE_STAFF':
        this.name = ''
        this.description = 'Termo de uso funcionarios dos estabelecimentos'
        break
      case 'TERM_OF_USE_RESELLER':
        this.name = ''
        this.description = 'Termo de uso vendedores'
        break
      case 'TERM_OF_USE_CLIENT':
        this.name = ''
        this.description = 'Termo de uso usuarios'
        break
      case 'PRIVACY_POLICY':
        this.name = ''
        this.description = 'Politica de privacidade'
        break
      default:
        this.name = ''
        this.description = '-'
        break
    }
  }
}
