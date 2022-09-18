import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';
import { Nullable } from '../../Decorators';

export default class CNewCustomerResquest extends BaseJSON {
  @Property
  name!: string;
  @Property
  email!: string;
  @Property
  mobilePhone!: string;
  @Property
  cpfCnpj!: string;
  @Property
  @Nullable
  phone?: string;
  @Property
  @Nullable
  postalCode?: string;
  @Property
  @Nullable
  address?: string;
  @Property
  @Nullable
  addressNumber?: string;
  @Property
  @Nullable
  complement?: string;
  @Property
  @Nullable
  province?: string;
  @Property
  @Nullable
  externalReference?: string;
  @Property
  @Nullable
  notificationDisabled?: boolean;
  @Property
  @Nullable
  additionalEmails?: string;
  @Property
  @Nullable
  municipalInscription?: string;
  @Property
  @Nullable
  stateInscription?: string;
  @Property
  @Nullable
  observations?: string;

  static init(
    name: string,
    email: string,
    mobilePhone: string,
    cpfCnpj: string,
    phone?: string,
    postalCode?: string,
    address?: string,
    addressNumber?: string,
    complement?: string,
    province?: string,
    externalReference?: string,
    notificationDisabled?: boolean,
    additionalEmails?: string,
    municipalInscription?: string,
    stateInscription?: string,
    observations?: string,
  ): CNewCustomerResquest {
    return this.createInitObject(arguments);
  }
}
