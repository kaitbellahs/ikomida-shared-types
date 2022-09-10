import { Enum } from '../Decorators/Enum';
import { TAddress } from '../Types';
import BaseJSON from './BaseJSON';

export default class IAddress extends BaseJSON {
  @Enum
  type?: TAddress;
  postalCode?: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  stat?: string;
  complement?: string;
  reference?: string;
}
