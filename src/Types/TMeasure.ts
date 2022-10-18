import TBaseType from './TBaseType.js'

export default class TMeasure extends TBaseType {
  static GRAM = new TMeasure('GRAM')
  static MILLILITER = new TMeasure('MILLILITER')
  static CENTIMETER = new TMeasure('CENTIMETER')
  constructor(type: string) {
    super(type)
    switch (type) {
      case 'GRAM':
        this.name = 'grama'
        this.description = 'grama'
        break
      case 'MILLILITER':
        this.name = 'ml'
        this.description = 'Mililitro'
        break
      case 'CENTIMETER':
        this.name = 'cm'
        this.description = 'centímetro'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}
