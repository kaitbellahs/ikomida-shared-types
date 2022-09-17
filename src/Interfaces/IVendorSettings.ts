import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IBusinessTime from './IBusinessTime';
import IVendorDelivery from './IVendorDelivery';
import IVendorPaymentGateway from './IVendorPaymentGateway';
import IVendorPreparation from './IVendorPreparation';
import IVendorProfile from './IVendorProfile';

export default class IVendorSettings extends BaseJSON {
  @Property
  @FromJSON
  profile?: IVendorProfile;
  @Property
  @FromJSON
  paymentGateway?: IVendorPaymentGateway;
  @Property
  @FromJSON
  business?: IBusinessTime;
  @Property
  @FromJSON
  delivery?: IVendorDelivery;
  @Property
  @FromJSON
  preparation?: IVendorPreparation;
}
