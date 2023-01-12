import TBaseType from './TBaseType.js'

export default class TProductKind extends TBaseType {
  static PHISIC = new TProductKind('PHISIC')
  static RAW = new TProductKind('RAW')
  static COMBO = new TProductKind('COMBO')
  static VIRTUAL = new TProductKind('VIRTUAL')

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'PHISIC':
        this.name = 'Físico'
        this.description = 'Produto físico'
        break
      case 'RAW':
        this.name = 'Insumo'
        this.description = 'Insumo / matéria-prima'
        break
      case 'COMBO':
        this.name = 'Combo'
        this.description = 'Combo de produtos / insumos'
        break
      case 'VIRTUAL':
        this.name = 'Virtual / serviço'
        this.description = 'Produto virtual / serviço'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}
