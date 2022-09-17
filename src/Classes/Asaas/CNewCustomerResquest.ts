import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CNewCustomerResquest extends BaseJSON {
  @Property
  name?: string;
  @Property
  email?: string;
  @Property
  phone?: string;
  @Property
  mobilePhone?: string;
  @Property
  cpfCnpj?: string;
  @Property
  postalCode?: string;
  @Property
  address?: string;
  @Property
  addressNumber?: string;
  @Property
  complement?: string;
  @Property
  province?: string;
  @Property
  externalReference?: string;
  @Property
  notificationDisabled?: boolean;
  @Property
  additionalEmails?: string;
  @Property
  municipalInscription?: string;
  @Property
  stateInscription?: string;
  @Property
  observations?: string;
}
