import TBaseType from '../TBaseType.js'

export default class TAssasSubscriptionCycle extends TBaseType {
  static WEEKLY = new TAssasSubscriptionCycle('WEEKLY')
  static BIWEEKLY = new TAssasSubscriptionCycle('BIWEEKLY')
  static MONTHLY = new TAssasSubscriptionCycle('MONTHLY')
  static QUARTERLY = new TAssasSubscriptionCycle('QUARTERLY')
  static SEMIANNUALLY = new TAssasSubscriptionCycle('SEMIANNUALLY')
  static YEARLY = new TAssasSubscriptionCycle('YEARLY')
}
