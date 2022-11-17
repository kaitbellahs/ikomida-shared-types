import TBaseType from './TBaseType'

export default class TRoles extends TBaseType {
  //MARK: -- Internal rules
  static ADMIN = new TRoles('ADMIN')
  static MANAGER = new TRoles('MANAGER')
  static APP = new TRoles('APP')
  static FINANCE = new TRoles('FINANCE')
  static ANALYTICAL = new TRoles('ANALYTICAL')
  static MARKETING = new TRoles('MARKETING')

  //MARK: -- vendor rules
  static VENDOR = new TRoles('VENDOR')
  static STAFF = new TRoles('STAFF')
  static WAITER = new TRoles('WAITER')
  static COOKER = new TRoles('COOKER')

  //MARK: -- vendor rules
  static DELIVERYMAN = new TRoles('DELIVERYMAN')

  //MARK: -- client rules
  static CLIENT = new TRoles('CLIENT')

  //MARK: -- reseller rules
  static RESELLER = new TRoles('RESELLER')

  //MARK: -- all
  static ALL = new TRoles('ALL')

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'ADMIN':
        this.name = 'Administrador'
        this.description = 'Administrador'
        break
      case 'MANAGER':
        this.name = 'Gerente'
        this.description = 'Gerente'
        break
      case 'APP':
        this.name = 'Appsman'
        this.description = 'Gerenciador de Apps'
        break
      case 'FINANCE':
        this.name = 'Financeiro'
        this.description = 'Financeiro'
        break
      case 'ANALYTICAL':
        this.name = 'Analiticsman'
        this.description = 'Gerente de dados'
        break
      case 'MARKETING':
        this.name = 'Marketingman'
        this.description = 'Gerenciador de marketing'
        break
      case 'VENDOR':
        this.name = 'Diretor'
        this.description = 'Responsavel pelo estabelecimento'
        break
      case 'STAFF':
        this.name = 'Colaborador'
        this.description = 'Colaborador (caixa)'
        break
      case 'WAITER':
        this.name = 'Garcom'
        this.description = 'Garcom'
        break
      case 'COOKER':
        this.name = 'Cozinheiro'
        this.description = 'Cozinheiro'
        break
      case 'DELIVERYMAN':
        this.name = 'Entregador'
        this.description = 'Entregador'
        break
      case 'CLIENT':
        this.name = 'Cliente'
        this.description = 'Cliente'
        break
      case 'RESELLER':
        this.name = 'Revendedor'
        this.description = 'Revendedor'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }

  //MARK: -- validations
  static isInternal(role: TRoles) {
    return [TRoles.ADMIN, TRoles.MANAGER, TRoles.APP, TRoles.FINANCE, TRoles.ANALYTICAL, TRoles.MARKETING].includes(
      role
    )
  }

  static isVendor(role: TRoles) {
    return [TRoles.VENDOR, TRoles.STAFF, TRoles.WAITER, TRoles.COOKER].includes(role)
  }

  static isClient(role: TRoles) {
    return [TRoles.CLIENT].includes(role)
  }

  static isDelivery(role: TRoles) {
    return [TRoles.DELIVERYMAN].includes(role)
  }

  static isReseller(role: TRoles) {
    return [TRoles.RESELLER].includes(role)
  }

  //MARK: -- Roles by category
  static get internals() {
    return [TRoles.ADMIN, TRoles.MANAGER, TRoles.APP, TRoles.FINANCE, TRoles.ANALYTICAL, TRoles.MARKETING]
  }

  static get vendors() {
    return [TRoles.VENDOR, TRoles.STAFF, TRoles.WAITER, TRoles.COOKER]
  }

  static get clients() {
    return [TRoles.CLIENT]
  }

  static get deliveries() {
    return [TRoles.DELIVERYMAN]
  }

  static get resellers() {
    return [TRoles.RESELLER]
  }
}
