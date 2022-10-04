import TBaseType from './TBaseType'

export default class TCompany extends TBaseType {
  static MEI = new TCompany('MEI')
  static LIMITED = new TCompany('LIMITED')
  static INDIVIDUAL = new TCompany('INDIVIDUAL')
  static ASSOCIATION = new TCompany('ASSOCIATION')
  constructor(type: string) {
    super(type)
    switch (type) {
      case 'MEI':
        this.name = 'MEI'
        this.description = 'Micro Empreendedor Individual'
        break
      case 'LIMITED':
        this.name = 'LTDA'
        this.description = 'Empresa Limitada'
        break
      case 'INDIVIDUAL':
        this.name = 'Individual'
        this.description = 'Empresa Individual'
        break
      case 'ASSOCIATION':
        this.name = 'Associação'
        this.description = 'Associação'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}
