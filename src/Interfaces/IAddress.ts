import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { TAddress } from '../Types';
import BaseJSON from './BaseJSON';

export default class IAddress extends BaseJSON {
  @Property
  postalCode: string;
  @Property
  street: string;
  @Property
  neighborhood: string;
  @Property
  city: string;
  @Property
  stat: string;
  @Property
  number?: string;
  @Property
  complement?: string;
  @Property
  @Enum
  type?: TAddress;
  @Property
  reference?: string;
  @Property
  distance?: number;
  @Property
  duration?: number;
  @Property
  selected?: boolean;

  constructor(
    postalCode: string,
    street: string,
    neighborhood: string,
    city: string,
    stat: string,
    number?: string,
    complement?: string,
    type?: TAddress,
    reference?: string,
    distance?: number,
    duration?: number,
    selected?: boolean,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.postalCode = postalCode
    this.street = street
    this.neighborhood = neighborhood
    this.city = city
    this.stat = stat
    this.number = number
    this.complement = complement
    this.type = type
    this.reference = reference
    this.distance = distance
    this.duration = duration
    this.selected = selected
  }

}
