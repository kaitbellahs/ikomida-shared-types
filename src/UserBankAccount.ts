import BaseType from './BaseType';
export default class UserBankAccount extends BaseType {
  constructor(type: string) {
    super(type);
    switch (type) {
      case UserBankAccount.CNPJ:
        this.name = 'CNPJ';
        this.description = 'CNPJ';
        break;
      case UserBankAccount.CPF:
        this.name = 'CPF';
        this.description = 'CPF';
        break;
      case UserBankAccount.PHONE:
        this.name = 'telefone';
        this.description = 'telefone';
        break;
      case UserBankAccount.EMAIL:
        this.name = 'email';
        this.description = 'email';
        break;
      case UserBankAccount.RANDOM:
        this.name = 'aleatoria';
        this.description = 'aleatoria';
        break;
      case UserBankAccount.BANK_ACCOUNT:
        this.name = 'conta bancaria';
        this.description = 'conta bancaria';
        break;
      default:
        this.name = '-';
        this.description = '-';
        break;
    }
  }

  static CPF = 'CPF';
  static CNPJ = 'CNPJ';
  static PHONE = 'PHONE';
  static EMAIL = 'EMAIL';
  static RANDOM = 'RANDOM';
  static BANK_ACCOUNT = 'BANK_ACCOUNT';
}
