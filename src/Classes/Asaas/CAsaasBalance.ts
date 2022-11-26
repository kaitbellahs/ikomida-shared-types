import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasBalance extends BaseJSON {
  @Property
  balance?: number
}
