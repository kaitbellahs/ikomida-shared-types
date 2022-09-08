import TBaseType from "../TBaseType"

export default class TAsaasSubscriptionStatus extends TBaseType {
    static ACTIVE = new TAsaasSubscriptionStatus('ACTIVE')
    static EXPIRED = new TAsaasSubscriptionStatus('EXPIRED')
}
