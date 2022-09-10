import { TAsaasSubscriptionStatus } from "../Types/Asaas"
import BaseJSON from "./BaseJSON"
import ISubscriptionCharge from "./ISubscriptionCharge"

export default class ISubscription extends BaseJSON {
    plan?: string
    value?: number
    subscription?: Date
    status?: TAsaasSubscriptionStatus
    nextDueDate?: Date
    charges?: ISubscriptionCharge[]
}