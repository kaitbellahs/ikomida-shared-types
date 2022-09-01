import BaseType from './BaseType';

export default class DiscountTypes extends BaseType {
  constructor(type: string) {
    super(type);
    this.id = type;
    switch (type) {
      case DiscountTypes.PERCENT:
        this.name = 'percentagem';
        this.description = 'Descontar uma percentagem';
        break;
      case DiscountTypes.VALUE:
        this.name = 'valor';
        this.description = 'Descontar um valor fixo';
        break;
      case DiscountTypes.NO:
        this.name = 'sem descontar';
        this.description = 'Sem nenhum desconto';
        break;
      default:
        this.name = '-';
        this.description = '-';
        break;
    }
  }
  static PERCENT = 'PERCENT';
  static VALUE = 'VALUE';
  static NO = 'NO';
}
