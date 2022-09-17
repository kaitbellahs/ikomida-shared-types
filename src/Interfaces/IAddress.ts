import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { TAddress } from '../Types';
import BaseJSON from './BaseJSON';

export default class IAddress extends BaseJSON {
  @Property
  postalCode!: string;
  @Property
  street!: string;
  @Property
  neighborhood!: string;
  @Property
  city!: string;
  @Property
  stat!: string;
  @Property
  number?: string;
  @Property
  complement?: string;
  @Property
  @Enum
  kind?: TAddress;
  @Property
  reference?: string;
  @Property
  distance?: number;
  @Property
  duration?: number;
  @Property
  selected?: boolean;

  static init(
    postalCode: string,
    street: string,
    neighborhood: string,
    city: string,
    stat: string,
    number?: string,
    complement?: string,
    kind?: TAddress,
    reference?: string,
    distance?: number,
    duration?: number,
    selected?: boolean,
    id?: string,
    timestamp?: number,
  ): IAddress {
    return this.createInitObject(arguments)
  }
}