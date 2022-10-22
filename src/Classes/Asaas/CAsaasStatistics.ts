import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasStatistics extends BaseJSON {
  @Property
  quantity?: number
  @Property
  value?: number
  @Property
  netValue?: number
}
