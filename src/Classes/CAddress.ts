import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { TAddress } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'

export default class CAddress extends BaseJSON {
  @Property
  postalCode!: string
  @Property
  street!: string
  @Property
  neighborhood!: string
  @Property
  city!: string
  @Property
  stat!: string
  @Property
  @Nullable
  number?: string
  @Property
  @Nullable
  complement?: string
  @Property
  @Enum
  @Nullable
  kind?: TAddress
  @Property
  @Nullable
  reference?: string
  @Property
  @Nullable
  distance?: number
  @Property
  @Nullable
  duration?: number
  @Property
  @Nullable
  selected?: boolean

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
    timestamp?: number
  ): CAddress {
    return this.createInitObject(arguments, [
      'postalCode',
      'street',
      'neighborhood',
      'city',
      'stat',
      'number',
      'complement',
      'kind',
      'reference',
      'distance',
      'duration',
      'selected',
      'id',
      'timestamp'
    ])
  }
}
