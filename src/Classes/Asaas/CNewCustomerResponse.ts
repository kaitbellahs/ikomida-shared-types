import CAsaasErrors from './CAsaasErrors';
import { Property } from '../../Decorators/Property';

export default class CNewCustomerResponse extends CAsaasErrors {
  @Property
  object?: string;
  @Property
  dateCreated?: string;
  @Property
  name?: string;
  @Property
  email?: string;
  @Property
  phone?: string;
  @Property
  mobilePhone?: string;
  @Property
  address?: string;
  @Property
  addressNumber?: string;
  @Property
  complement?: string;
  @Property
  province?: string;
  @Property
  postalCode?: string;
  @Property
  cpfCnpj?: string;
  @Property
  personType?: string;
  @Property
  deleted?: boolean;
  @Property
  additionalEmails?: string;
  @Property
  externalReference?: string;
  @Property
  notificationDisabled?: boolean;
  @Property
  city?: number;
  @Property
  state?: string;
  @Property
  country?: string;
  @Property
  observations?: string;
}
