import TBaseType from "./TBaseType"

export default class TermTypes extends TBaseType {
  static TERM_OF_USE_VENDOR = new TermTypes('TERM_OF_USE_VENDOR')
  static TERM_OF_USE_STAFF = new TermTypes('TERM_OF_USE_STAFF')
  static TERM_OF_USE_RESELLER = new TermTypes('TERM_OF_USE_RESELLER')
  static TERM_OF_USE_CLIENT = new TermTypes('TERM_OF_USE_CLIENT')
  static PRIVACY_POLICY = new TermTypes('PRIVACY_POLICY')

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