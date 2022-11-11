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
