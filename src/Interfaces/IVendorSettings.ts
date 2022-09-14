import BaseJSON from './BaseJSON';
import IBusinessTime from './IBusinessTime';
import IVendorDelivery from './IVendorDelivery';
import IVendorPaymentGateway from './IVendorPaymentGateway';
import IVendorPreparation from './IVendorPreparation';
import IVendorProfile from './IVendorProfile';

export default class IVendorSettings extends BaseJSON {
  profile?: IVendorProfile;
  paymentGateway?: IVendorPaymentGateway;
  business?: IBusinessTime;
  delivery?: IVendorDelivery;
  preparation?: IVendorPreparation;
}
