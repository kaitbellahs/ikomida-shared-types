import { Property } from '../Decorators/Property'
import { FromJSON } from '../Decorators/FromJSON'
import BaseJSON from './BaseJSON'
import CBusinessTime from './CBusinessTime'
import CVendorDelivery from './CVendorDelivery'
import CVendorPaymentGateway from './CVendorPaymentGateway'
import CVendorPreparation from './CVendorPreparation'
import CVendorProfile from './CVendorProfile'
import { Nullable } from '../Decorators'

export default class CVendorSettings extends BaseJSON {
  @Property
  @FromJSON
  @Nullable
  profile?: CVendorProfile
  @Property
  @FromJSON
  @Nullable
  paymentGateway?: CVendorPaymentGateway
  @Property
  @FromJSON
  @Nullable
  business?: CBusinessTime
  @Property
  @FromJSON
  @Nullable
  delivery?: CVendorDelivery
  @Property
  @FromJSON
  @Nullable
  preparation?: CVendorPreparation
  @Property
  @FromJSON
  @Nullable
  isActive?: boolean
}
