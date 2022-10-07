import { FromJSON } from '../../Decorators/FromJSON.js'
import BaseJSON from '../BaseJSON.js'
import CPagSeguroCardHolder from './CPagSeguroCardHolder.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroCard extends BaseJSON {
  @Property
  @FromJSON
  holder?: CPagSeguroCardHolder
  @Property
  number?: number
  @Property
  network_token?: string
  @Property
  exp_month?: number
  @Property
  exp_year?: number
  @Property
  security_code?: number
  @Property
  store?: boolean
  @Property
  brand?: string
  @Property
  first_digits?: string
  @Property
  last_digits?: string

  static init(
    holder?: CPagSeguroCardHolder,
    number?: number,
    network_token?: string,
    exp_month?: number,
    exp_year?: number,
    security_code?: number,
    store?: boolean,
    brand?: string,
    first_digits?: string,
    last_digits?: string,
    id?: string,
    timestamp?: number
  ): CPagSeguroCard {
    return this.createInitObject(arguments)
  }
}
