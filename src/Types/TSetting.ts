import TBaseType from './TBaseType.js'

export default class TSetting extends TBaseType {
  static TEXT = new TSetting('TEXT')
  static BOOL = new TSetting('BOOL')
  static NUMBER = new TSetting('NUMBER')
  static CURRENCY = new TSetting('CURRENCY')
  static LIST = new TSetting('LIST')

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'TEXT':
        this.name = 'Campo de texto'
        this.description = 'Campo de texto'
        break
      case 'BOOL':
        this.name = 'Switch'
        this.description = 'Switch'
        break
      case 'NUMBER':
        this.name = 'Campo de numeros'
        this.description = 'Campo de numeros'
        break
      case 'CURRENCY':
        this.name = 'Campo de moeda'
        this.description = 'Campo de moeda'
        break
      case 'LIST':
        this.name = 'Campo de lista'
        this.description = 'Campo de lista'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}
