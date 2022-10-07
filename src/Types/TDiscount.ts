import TBaseType from './TBaseType.js'

export default class TDiscount extends TBaseType {
  static PERCENT = new TDiscount('PERCENT')
  static VALUE = new TDiscount('VALUE')
  static NO = new TDiscount('NO')
  constructor(type: string) {
    super(type)
    switch (type) {
      case 'PERCENT':
        this.name = 'percentagem'
        this.description = 'Descontar uma percentagem'
        break
      case 'VALUE':
        this.name = 'valor'
        this.description = 'Descontar um valor fixo'
        break
      case 'NO':
        this.name = 'sem descontar'
        this.description = 'Sem nenhum desconto'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}
