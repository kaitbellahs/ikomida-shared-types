import TBaseType from '../TBaseType.js'

export default class TAsaasSubscriptionStatus extends TBaseType {
  static ACTIVE = new TAsaasSubscriptionStatus('ACTIVE')
  static EXPIRED = new TAsaasSubscriptionStatus('EXPIRED')
}
